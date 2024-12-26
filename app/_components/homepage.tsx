"use client";

import useMovieList from "@/hooks/useMovieList";
import Billboard from "./billboard";
import MovieList from "./movie-list";
import Navbar from "./navbar";

const Homepage = () => {
  const { data: moviesData = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={moviesData} />
      </div>
    </>
  );
};

export default Homepage;
