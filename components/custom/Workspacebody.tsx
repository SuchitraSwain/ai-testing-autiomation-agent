"use client";

import { useUserDetailContext } from "@/context/UserDetailContext";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import EmptyWorkspace from "./EmptyWorkspace";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Workspacebody() {
  const { userDetails } = useUserDetailContext();

  const router = useRouter();

  const onAddRepository = async () => {
    router.push("/api/github");
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-medium text-foreground">Workspace</h2>
        <h2 className="text-blue-800 bg-blue-100 px-2 py-1 rounded-lg">
          Remaining Credits: {userDetails?.credits ?? "—"}
        </h2>
      </div>

      <Card className="mt-5 flex items-center gap-2 justify-between p-4 border rounded-lg">
        <div className="flex items-center gap-5">
          <Image src={"/github.png"} alt="github" width={40} height={40} />
          <h2 className="text-lg">Connect Github and Add Repositories</h2>
        </div>
        <div>
          <Button type="button" onClick={onAddRepository}>
            + Add Repository
          </Button>
        </div>
      </Card>

      <Card className="mt-10 mb-10">
        <CardContent>
          <EmptyWorkspace />
        </CardContent>
      </Card>
    </div>
  );
}
