import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Index({}) {
  const session = await getServerSession(options);
  // console.log(session);
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
