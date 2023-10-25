import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { SessionWithToken } from "@/app/types/SessionWithToken";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  const session: SessionWithToken | null = await getServerSession(options);
  console.log("session", session);
  const res = await fetch("https://www.strava.com/api/v3/activities", {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      Accept: "*/*",
    },
  });
  const data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
