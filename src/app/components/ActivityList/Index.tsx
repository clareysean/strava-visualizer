import ActivityCard from "../ActivityCard";

export default function Index() {
  let error: string | null = null;
  return (
    <div>
      {error && <div>{error}</div>}
      Index
      {/* map over activities and generate some cards here */}
      <ActivityCard />
    </div>
  );
}
