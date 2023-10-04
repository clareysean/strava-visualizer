import ActivityCard from "../ActivityCard";
import { SessionWithToken } from "@/app/types/SessionWithToken";

export default async function Index({
  session,
}: {
  session: SessionWithToken | null;
}) {
  let error: string | null = null;
  let activities: any[] = [];

  if (!session) {
    error = "You must be signed in to view this page.";
  }

  try {
    const res = await fetch("https://www.strava.com/api/v3/activities", {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    if (!res.ok) {
      console.log(res);
      error = "Unable to fetch data.";
    } else {
      const activities = await res.json();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    error = "Whoops... An unexpected error occurred.";
  }

  return (
    <div>
      {error && <div>{error}</div>}
      Index
      <ActivityCard session={session} />
    </div>
  );
}
