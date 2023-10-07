// Define an interface for the custom provider options
export interface CustomStravaProviderOptions {
  clientId: string;
  clientSecret: string;
}

// Define an interface for the profile object
export interface StravaProfile {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
}
