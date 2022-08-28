import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const MovieList = ({ detail, prevClick, nextClick }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="moviedetails">
      <div className="movie">
        {detail.map((movie) => (
          <div className="movie__list" key={movie.id}>
            <Link
              state={{ detail: detail.filter((item) => item.id === movie.id) }}
              to={`/movie/${movie.id}`}
            >
              <img src={IMG_API + movie.backdrop_path} alt="" />
              <div className="movie__list__detail">
                <h3>{movie.title}</h3>
                <span className={`tag ${setVoteClass(movie.vote_average)}`}>
                  {movie.vote_average}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="moviedetails__btn">
        <button onClick={prevClick} className="moviedetails__btn__detail">
          <GrLinkPrevious />
        </button>
        <button onClick={nextClick} className="moviedetails__btn__detail">
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
