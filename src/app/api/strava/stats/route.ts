import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("token");
  const id = searchParams.get("id");

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~params", query, id);

  if (!query) {
    return NextResponse.json(
      { error: "Missing 'query' parameter" },
      { status: 400 }
    );
  }

  const res = await fetch(
    `https://www.strava.com/api/v3/athletes/${id}/stats`,
    {
      headers: {
        Authorization: `Bearer ${query}`,
        Accept: "*/*",
      },
    }
  );

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
