import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const res = await fetch("https://www.strava.com/api/v3/activities", {
      headers: {
        Authorization: request.headers.get("Authorization") as string,
        Accept: "*/*",
      },
    });
    const data = await res.json();
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch data from Strava API" },
      { status: 500 }
    );
  }
}
