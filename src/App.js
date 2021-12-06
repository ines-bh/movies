import React, { useState } from "react";

import "./App.css";
import Movies from "./components/moviesdata/moviesdata";
import MoviesLists from "./components/movieslists/movieslists";
import MoviesCard from "./components/moviescard/moviescard";
import Rating from "./components/rating/rating";
import Search from "./components/search/search";
import AddMovie from "./components/addmovies/add";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [ratingValue, setRatingValue] = useState(1);
  const [title, setTitle] = useState("");
  console.log(movies);

  return (
    <div className="App">
      <div className="filterPart">
        <Search title={title} setTitle={setTitle} />
        <Rating
          isFilter={true}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </div>

      <AddMovie movies={movies} setMovies={setMovies} />
      <MoviesLists movies={movies} title={title} ratingValue={ratingValue} />
    </div>
  );
}

export default App;
