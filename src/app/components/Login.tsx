"use client";
import { useRouter } from "next/navigation";
type Props = {};

export default function Login({}: Props) {
  const stravaClientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
  const redirectUrl = "http://localhost:3000/home";
  const router = useRouter();
  const handleLogin = () => {
    router.push(
      `http://www.strava.com/oauth/authorize?client_id=${stravaClientId}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read`
    );
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Connect with Strava</button>
    </div>
  );
}
