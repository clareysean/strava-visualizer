import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
  }
  try {
    const res = await fetch(
      `https://www.strava.com/api/v3/athletes/${id}/stats`,
      {
        headers: {
          Authorization: request.headers.get("Authorization") as string,
          Accept: "*/*",
        },
      }
    );
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
