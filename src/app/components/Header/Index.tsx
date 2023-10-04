import React from "react";
import Link from "next/link";
import { Session } from "next-auth";

export default async function Index({ session }: { session: Session | null }) {
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
