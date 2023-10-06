"use client";

import { SessionProvider } from "next-auth/react";
import { SessionWithToken } from "../types/SessionWithToken";

export default function CurrentSessionProvider({
  children,
}: {
  children: React.ReactNode;
  session: SessionWithToken | null;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
