"use client";

import React from "react";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Index({ session }: { session: Session | null }) {
  return (
    <div>
      <nav>
        {session ? (
          <a onClick={() => signOut()}>SIGN OUT</a>
        ) : (
          <a onClick={() => signIn()}>SIGN IN</a>
        )}
      </nav>
    </div>
  );
}
