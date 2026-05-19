import { db, users } from "@/db";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = user.primaryEmailAddress?.emailAddress;
  if (!email) {
    return NextResponse.json({ error: "No email on account" }, { status: 400 });
  }

  try {
    const userResult = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (userResult.length === 0) {
      const [newUser] = await db
        .insert(users)
        .values({
          email,
          name: user.fullName ?? "New User",
        })
        .returning();

      return NextResponse.json(newUser, { status: 201 });
    }

    return NextResponse.json(userResult[0]);
  } catch (e) {
    console.error("POST /api/users failed:", e);
    return NextResponse.json({ error: "Failed to sync user" }, { status: 500 });
  }
}
