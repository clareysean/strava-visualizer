import Header from "./components/Header";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ActivityList from "./components/ActivityList";
import { SessionWithToken } from "./types/SessionWithToken";

export default async function Home() {
  const session: SessionWithToken | null = await getServerSession(options);
  return (
    <main>
      <Header session={session} />
      <ActivityList session={session} />
    </main>
  );
}
