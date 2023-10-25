import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("token");

  if (!query) {
    return NextResponse.json(
      { error: "Missing 'query' parameter" },
      { status: 400 }
    );
  }

  const res = await fetch("https://www.strava.com/api/v3/activities", {
    headers: {
      Authorization: `Bearer ${query}`,
      Accept: "*/*",
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data from Strava API" },
      { status: res.status }
    );
  }

  const data = await res.json();
  console.log(data);
  return NextResponse.json({ data });
}
