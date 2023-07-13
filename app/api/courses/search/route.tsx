import data from "../data.json";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const filteredCourses = data.filter((course) =>
    course.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return NextResponse.json(filteredCourses);
};
