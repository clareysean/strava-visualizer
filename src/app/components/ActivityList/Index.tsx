"use client";

import ActivityCard from "../ActivityCard";
import { SessionWithToken } from "@/app/types/SessionWithToken";
import { useSession } from "next-auth/react";

export default function Index() {
  let error: string | null = null;
  const { data: session, status } = useSession() as {
    data: SessionWithToken | null;
    status: string;
  };

  if (!session) {
    error = "You must be signed in to view this page.";
  }
  return (
    <div>
      {error && <div>{error}</div>}
      Index
      {/* map over activities and generate some cards here */}
      <ActivityCard />
    </div>
  );
}
