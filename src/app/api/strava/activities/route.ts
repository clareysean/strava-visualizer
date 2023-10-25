import { getServerSession } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";
import { SessionWithToken } from "@/app/types/SessionWithToken";

export async function GET(request: Request): Promise<Response> {
  const session: SessionWithToken | null = await getServerSession(options);
  const res = await fetch("https://www.strava.com/api/v3/activities", {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      Accept: "*/*",
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
