import ActivityCard from "../ActivityCard";

interface Props {
  stats: Object; // replace 'any' with the actual type of stats
  activities: Object; // replace 'any' with the actual type of activities
}

export default function Index({ stats, activities }: Props) {
  let error: string | null = null;
  return (
    <div className="card">
      {error && <div>{error}</div>}
      Index
      {/* map over activities and generate some cards here */}
      <ActivityCard />
    </div>
  );
}
