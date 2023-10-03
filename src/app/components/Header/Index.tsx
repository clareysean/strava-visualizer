"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Index({}) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });
  return (
    <div>
      <nav>
        {session ? (
          <Link href="/api/auth/signout">SIGN OUT</Link>
        ) : (
          <Link href="/api/auth/signin">SIGN IN</Link>
        )}
      </nav>
    </div>
  );
}
