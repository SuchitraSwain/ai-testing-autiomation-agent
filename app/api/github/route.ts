import { NextRequest, NextResponse } from "next/server";

/**
 * Starts GitHub OAuth (web flow). Register the callback URL in the GitHub OAuth app settings.
 * @see https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
 *
 * - GET /api/github — 302 redirect to GitHub (browser / <a href>)
 * - GET /api/github?json=1 — `{ url }` for clients that use fetch/axios then navigate
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.GITHUB_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Missing GITHUB_CLIENT_ID or GITHUB_REDIRECT_URI" },
      { status: 500 },
    );
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    scope: "repo read:user",
  });

  const authorizeUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

  if (request.nextUrl.searchParams.has("json")) {
    return NextResponse.json({ url: authorizeUrl });
  }

  return NextResponse.redirect(authorizeUrl);
}
