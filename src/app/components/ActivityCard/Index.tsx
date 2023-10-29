import React from "react";

export default function Index({ stat }: { stat: any }) {
  return (
    <div className="card">
      {Object.entries(stat).map(([key, value]) => (
        <span key={key}>
          {key.toString()}: {value?.toString() as string} <br />
        </span>
      ))}
    </div>
  );
}
