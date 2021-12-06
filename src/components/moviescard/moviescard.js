import React from "react";
import { Card } from "react-bootstrap";

import Rating from "../rating/rating";

import "./moviescard.css";

const MoviesCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Img} className="movieImg" />
        <Card.Body className="cardText">
          <Card.Title className="movieTitle">{movie.Title}</Card.Title>
          <span>
            <Rating Rating={movie.Rate} />
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoviesCard;
