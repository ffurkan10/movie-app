import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieDetails from "../movie-details/MovieDetails";

const MovieList = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=1`
      )
      .then((res) => {
        setDetail(res.data.results);
      });
  }, []);

  return (
    <div className="moviedetails">
      <MovieDetails detail={detail} />
    </div>
  );
};

export default MovieList;
