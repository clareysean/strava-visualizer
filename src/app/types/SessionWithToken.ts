import { Session } from "next-auth";

export interface SessionWithToken extends Session {
  user: {
    name: string;
    email: string | undefined;
    image: string;
    id: number;
  };
  accessToken: string;
}
