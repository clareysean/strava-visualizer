"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

const handleStravaSignIn = async () => {
  const scope = "read,activity:read_all"; // Specify the desired scopes here
  const clientId = process.env.STRAVA_CLIENT_ID;
  const redirectUri = encodeURIComponent("http://localhost:3000/");

  // Construct the URL with proper query parameters
  const authUrl = `https://www.strava.com/api/v3/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`;

  // Start the OAuth flow by initiating the sign-in with a callbackUrl option
  await signIn("strava", { callbackUrl: authUrl });
};

// Use handleStravaSignIn when the user initiates the Strava sign-in process

export default function Index({ session }: { session: Session | null }) {
  return (
    <div>
      <nav>
        {session ? (
          <a onClick={() => signOut()}>SIGN OUT</a>
        ) : (
          <a onClick={handleStravaSignIn}>SIGN IN</a>
        )}
      </nav>
    </div>
  );
}
