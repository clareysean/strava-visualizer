import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home({}) {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <main>
      <Header session={session} />
      <ActivityList />
    </main>
  );
}
