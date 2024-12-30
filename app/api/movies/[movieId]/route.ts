/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(
  req: NextRequest,
  { params }: { params: { movieId: string } }
) {
  try {
    await serverAuth();

    const { movieId } = params;

    if (typeof movieId !== "string") {
      return NextResponse.json({ error: "Invalid movie id" }, { status: 400 });
    }

    if (!movieId) {
      return NextResponse.json(
        { error: "Movie id is required" },
        { status: 400 }
      );
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 400 });
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
