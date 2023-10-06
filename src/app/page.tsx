import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import { SessionWithToken } from "./types/SessionWithToken";
import CurrentSessionProvider from "./contexts/CurrentSessionProvider";

export default async function Home({
  session,
}: {
  session: SessionWithToken | null;
}) {
  return (
    <main>
      <CurrentSessionProvider session={session}>
        <Header />
        <ActivityList />
      </CurrentSessionProvider>
    </main>
  );
}
