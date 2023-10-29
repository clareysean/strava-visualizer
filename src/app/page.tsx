//components
import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
//utils
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
//types
import { SessionWithToken } from "./types/SessionWithToken";

export default async function Home({}) {
  const session: SessionWithToken | null = await getServerSession(options);

  console.log("session", session);

  const activities = await fetch(
    `${process.env.DEV_URL}/api/strava/activities`,
    {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      method: "GET",
    }
  );

  const stats = await fetch(
    `${process.env.DEV_URL}/api/strava/stats?id=${session?.user?.id}`,
    {
      headers: { Authorization: `Bearer ${session?.accessToken}` },
      method: "GET",
    }
  );

  if (session?.accessToken == null) {
    return (
      <main>
        <Header session={session} />
        <p>Not logged in</p>
      </main>
    );
  }

  return (
    <main>
      <Header session={session} />
      <ActivityList stats={stats as any} activities={activities as any} />
    </main>
  );
}
