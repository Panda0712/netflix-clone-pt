/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from "lodash";
import React from "react";
import MovieCard from "./movie-card";

interface Props {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<Props> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
