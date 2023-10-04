import React from "react";
import { Session } from "next-auth";
export default function Index({ session }: { session: Session | null }) {
  return <div>Index</div>;
}
