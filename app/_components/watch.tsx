"use client";

import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ReactPlayer from "react-player";

interface Props {
  movieId: string;
}

const Watch: React.FC<Props> = ({ movieId }) => {
  const router = useRouter();
  const { data } = useMovie(movieId as string);

  return (
    <div className="w-screen h-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={30}
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light mr-1">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <ReactPlayer
        muted
        playing
        autoPlay
        controls
        className="w-full h-full react-player"
        url={data?.videoUrl}
      ></ReactPlayer>
    </div>
  );
};

export default Watch;
