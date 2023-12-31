interface StravaProviderOptions {
  clientId: string;
  clientSecret: string;
}

interface StravaProfile {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
}

export default function CustomStravaProvider(options: StravaProviderOptions) {
  return {
    id: "customStrava",
    name: "Strava",
    type: "oauth",
    authorization: {
      url: "https://www.strava.com/api/v3/oauth/authorize",
      params: {
        scope: "read,activity:read_all",
        approval_prompt: "auto",
        response_type: "code",
      },
    },
    token: {
      url: "https://www.strava.com/api/v3/oauth/token",
    },
    userinfo: "https://www.strava.com/api/v3/athlete",
    client: {
      token_endpoint_auth_method: "client_secret_post",
    },

    profile(profile: StravaProfile) {
      return {
        id: profile.id, // Ensure id is a string
        name: `${profile.firstname} ${profile.lastname}`,
        email: null,
        image: profile.profile,
      };
    },
    options,
  };
}
