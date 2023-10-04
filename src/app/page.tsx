import Header from "./components/Header";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main>
      <Header session={session} />
    </main>
  );
}
