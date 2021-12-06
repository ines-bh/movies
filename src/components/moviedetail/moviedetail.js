import React from "react";

import "./moviedetail.css";

const Moviedetail = ({ location, history }) => {
  const movie = location.state;
  return (
    <div className="moviesDetails">
      <h2 className="title">{movie.Title}</h2>
      <img src={movie.Img} alt={movie.Title} className="Mahmoud" />
      <h4 className="title">{movie.description}</h4>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Moviedetail;
