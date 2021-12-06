import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Movies from "./components/moviesdata/moviesdata";
import MoviesLists from "./components/movieslists/movieslists";
import MoviesCard from "./components/moviescard/moviescard";
import Rating from "./components/rating/rating";
import Search from "./components/search/search";
import AddMovie from "./components/addmovies/add";
import MovieDetails from "./components/moviedetail/moviedetail";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [ratingValue, setRatingValue] = useState(1);
  const [title, setTitle] = useState("");
  console.log(movies);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="filterPart">
                <Search title={title} setTitle={setTitle} />
                <Rating
                  isFilter={true}
                  ratingValue={ratingValue}
                  setRatingValue={setRatingValue}
                />
              </div>

              <AddMovie movies={movies} setMovies={setMovies} />

              <MoviesLists
                movies={movies}
                title={title}
                ratingValue={ratingValue}
              />
            </div>
          )}
        />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
