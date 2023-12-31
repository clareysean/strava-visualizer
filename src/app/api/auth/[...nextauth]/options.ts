import type { NextAuthOptions } from "next-auth";
import CustomStravaProvider from "@/app/utils/customProvider";
import { CustomStravaProviderOptions } from "@/app/types/StravaProviderTypes";

const customProviderOptions: CustomStravaProviderOptions = {
  clientId: process.env.STRAVA_CLIENT_ID as string,
  clientSecret: process.env.STRAVA_SECRET as string,
};

export const options: NextAuthOptions = {
  providers: [CustomStravaProvider(customProviderOptions)],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token and user id to the token right after signin
      if (account) {
        console.log("account", account);
        token.accessToken = account.access_token; // account is the Strava user object
        token.id = account.athlete.id;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      } else if (token.accessToken && token.refreshToken) {
        if (Date.now() >= token.expiresAt) {
          console.log("~~~~~~~~~~~~refreshing token~~~~~~~~~~~");
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
              console.log("~~~~~~~~DATA~~~~~~~~~", data);
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
      // console.log("session", session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};
