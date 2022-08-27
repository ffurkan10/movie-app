import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieDetails from "../movie-details/MovieDetails";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const MovieList = () => {
  const [detail, setDetail] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=${page}`
      )
      .then((res) => {
        setDetail(res.data.results);
      });
  }, [page]);

  const nextClick = () => {
    setPage((page) => page + 1);
  };

  const prevClick = () => {
    setPage((page) => page - 1);
  };

  return (
    <div className="moviedetails">
      <div className="moviedetails__main">
        <MovieDetails detail={detail} />
      </div>
      <div className="moviedetails__btn">
        <button className="moviedetails__btn__detail">
          <GrLinkPrevious onClick={prevClick} />
        </button>
        <button className="moviedetails__btn__detail">
          <GrLinkNext onClick={nextClick} />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
