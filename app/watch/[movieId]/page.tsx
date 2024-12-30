/* eslint-disable @typescript-eslint/no-explicit-any */
import Watch from "@/app/_components/watch";
import React from "react";

const page = async ({ params }: any) => {
  const { movieId } = params;

  return <Watch movieId={movieId} />;
};

export default page;
