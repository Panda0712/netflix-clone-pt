/* eslint-disable @typescript-eslint/no-explicit-any */
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();

    const favoriteMovies = await prismadb.user.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
