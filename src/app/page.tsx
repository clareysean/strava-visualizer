import Header from "./components/Header";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import ActivityList from "./components/ActivityList";
export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      <Header session={session} />
      <ActivityList session={session} />
    </main>
  );
}
