import React from "react";

export default function Index({ activity }: { activity: any }) {
  return (
    <div className="card">
      {Object.entries(activity).map(([key, value]) => (
        <span key={key}>
          {key.toString()}: {value?.toString() as string} <br />
        </span>
      ))}
    </div>
  );
}
