import { NextResponse } from "next/server";
import data from "./data.json";

export const GET = async (request: Request) => {
  return NextResponse.json(data);
};
