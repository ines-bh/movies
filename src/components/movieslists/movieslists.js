import React from "react";
import MoviesCard from "../moviescard/moviescard";

import "./movieslists.css";

const MoviesLists = ({ movies, title, ratingValue }) => {
  return (
    <div className="movieList">
     

      {movies
        .filter(
          (movie) =>
            movie.Title.toUpperCase().includes(title.toUpperCase()) &&
            movie.Rate >= ratingValue
        )
        .map((movie) => (
          <MoviesCard movie={movie} key={movie.id} />
        ))}

    </div>
  );
};

export default MoviesLists;
