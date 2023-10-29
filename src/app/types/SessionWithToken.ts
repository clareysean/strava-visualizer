import { Session } from "next-auth";

export interface SessionWithToken extends Session {
  accessToken: string;
  id: number;
}
