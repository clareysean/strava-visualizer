import ActivityCard from "../ActivityCard";
import { SessionWithToken } from "@/app/types/SessionWithToken";

export default async function Index({
  session,
}: {
  session: SessionWithToken | null;
}) {
  const res = await fetch("https://www.strava.com/api/v3/activities", {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });

  return (
    <div>
      Index
      <ActivityCard session={session} />
    </div>
  );
}
