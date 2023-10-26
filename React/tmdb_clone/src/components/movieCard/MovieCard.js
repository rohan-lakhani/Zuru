import React from "react";
import "./movieCard.css";
import { Link } from "@mui/material";
import CircularProgressBar from "../circularProgressBar/CircularProgressBar";

const MovieCard = ({ movie, variant, category }) => {
  const percentage = Math.round(movie?.vote_avg * 10);
  return (
    <div className={`movie_card ${variant}`}>
      <div className="movie_card_image">
        <div>
          <a href={`/detail/${category}/${movie.id}`}>
            <img
              className={`poster ${variant} ${
                movie.poster === null ? "no_img" : ""
              }`}
              src={
                movie.poster !== null
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster}`
                  : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
              }
              alt={movie.title}
            />
          </a>
        </div>
        <div className="options"></div>
      </div>
      <div className={`movie_card_content ${variant}`}>
        {!(variant === "small") && (
          <CircularProgressBar percentage={percentage} />
        )}
        <h2>
          <a href={`/detail/${category}/${movie.id}`}>{movie.title}</a>
        </h2>
        <p style={{ textAlign: "left" }}>{movie.subTitle}</p>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  variant: "default",
};

export default MovieCard;
