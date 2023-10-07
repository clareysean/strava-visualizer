import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { SessionWithToken } from "./types/SessionWithToken";

export default async function Home({}) {
  const session: SessionWithToken | null = await getServerSession(options);
  if (session?.accessToken == null) {
    return (
      <main>
        <Header session={session} />
        <p>Not logged in</p>
      </main>
    );
  }
  const activities = await fetch("https://www.strava.com/api/v3/activities", {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
      Accept: "*/*",
    },
  }).then((res) => res.json());

  const stats = await fetch(
    `https://www.strava.com/api/v3/athletes/${session?.user?.id}/stats`,
    {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        Accept: "*/*",
      },
    }
  ).then((res) => res.json());

  console.log(activities);
  console.log(stats);
  console.log(session);
  return (
    <main>
      <Header session={session} />
      <ActivityList />
    </main>
  );
}
