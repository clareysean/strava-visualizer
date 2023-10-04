import type { NextAuthOptions } from "next-auth";
import StravaProvider from "next-auth/providers/strava";

export const options: NextAuthOptions = {
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID as string,
      clientSecret: process.env.STRAVA_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token and user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = account.athlete.id;
        token.refreshToken = account.refresh_token;
      } else if (token.accessToken && token.refreshToken) {
        if (Date.now() >= token.expiresAt) {
          try {
            // Call Strava API to refresh the access token
            const response = await fetch(
              "https://www.strava.com/api/v3/oauth/token",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                  client_id: process.env.STRAVA_CLIENT_ID as string,
                  client_secret: process.env.STRAVA_SECRET as string,
                  grant_type: "refresh_token",
                  refresh_token: token.refreshToken,
                }),
              }
            );

            if (response.ok) {
              const data = await response.json();
              token.accessToken = data.access_token;
              token.expiresAt = Date.now() + data.expires_in * 1000;
            } else {
              console.error(
                "Error refreshing access token",
                response.statusText
              );
            }
          } catch (error) {
            console.error("Error refreshing access token", error);
          }
        }
      }

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Add the user id to the session
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
