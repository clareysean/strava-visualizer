"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Index() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div>
      <nav>
        {session ? (
          <a onClick={() => signIn("strava", { callBackUrl: "/" })}>SIGN IN</a>
        ) : (
          <a onClick={() => signOut()}>SIGN OUT</a>
        )}
      </nav>
    </div>
  );
}
