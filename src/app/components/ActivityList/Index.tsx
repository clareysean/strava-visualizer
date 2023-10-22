import ActivityCard from "../ActivityCard";

interface Props {
  stats: any[];
  activities: any[];
}

export default function Index({ stats, activities }: Props) {
  let error: string | null = null;
  return (
    <div className="card">
      {error && <div>{error}</div>}
      Index
      {activities.map((activity) => {
        return <ActivityCard key={activity.id} activity={activity} />;
      })}
    </div>
  );
}
