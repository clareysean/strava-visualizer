import Header from "./components/Header";
import ActivityList from "./components/ActivityList";
import { SessionWithToken } from "./types/SessionWithToken";
import CurrentSessionProvider from "./contexts/CurrentSessionProvider";

export default async function Home({}) {
  return (
    <main>
      <CurrentSessionProvider>
        <Header />
        <ActivityList />
      </CurrentSessionProvider>
    </main>
  );
}
