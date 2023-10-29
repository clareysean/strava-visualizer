import ActivityCard from "../ActivityCard";

interface Props {
  stats: any[];
}

export default function Index({ stats }: Props) {
  let error: string | null = null;
  console.log(stats);
  return (
    <div className="card">
      {error && <div>{error}</div>}
      Index
      {stats.map((stat, index) => {
        return <ActivityCard key={index} stat={stat} />;
      })}
    </div>
  );
}
