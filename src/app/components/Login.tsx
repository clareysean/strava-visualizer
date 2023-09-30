"use client";
import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      <h1>Welcome</h1>
      <form action="https://www.strava.com/oauth/authorize" method="GET">
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
}
