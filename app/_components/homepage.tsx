"use client";

import useMovieList from "@/hooks/useMovieList";
import Billboard from "./billboard";
import MovieList from "./movie-list";
import Navbar from "./navbar";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "./info-modal";
import useInfoModal from "@/hooks/useInfoModal";

const Homepage = () => {
  const { data: moviesData = [] } = useMovieList();
  const { data: favoriteMovies = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={moviesData} />
        <MovieList title="My List" data={favoriteMovies} />
      </div>
    </>
  );
};

export default Homepage;
