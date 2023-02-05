import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Create = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [similar, setSimilar] = useState([]);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
      )
      .then((res) => {
        setMovieDetail(res.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&page=1`
      )
      .then((res) => {
        setSimilar(res.data.results);
      });
  }, [id]);

  console.log(similar);

  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "greenvote";
    } else if (vote >= 6) {
      return "yellowvote";
    } else {
      return "redvote";
    }
  };
  console.log(movieDetail);
  return (
    <div className="create__container">
      <div className="create__main">
        <div className="create__main__title">
          <h1>{movieDetail.title}</h1>
          <span className={`tag ${setVoteClass(movieDetail.vote_average)}`}>
            {movieDetail.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="create__main__detail">
          <img src={IMG_API + movieDetail.backdrop_path} alt="" />
          <div className="create__main__detail__text">
            <p>{movieDetail.overview}</p>
            <a href={movieDetail.homepage}>Click for original website</a>
          </div>
        </div>
      </div>

      <div className="create">
        <h2>Similar Movies</h2>
        <div className="create__similar">
          {similar.map((movie) => (
            <Link
              key={movie.id}
              state={{
                similar: similar.filter((item) => item.id === movie.id),
              }}
              to={`/movie/${movie.id}`}
            >
              <ul className="create__similar__ul">
                <li className="create__similar__ul__li">
                  <img src={IMG_API + movie.backdrop_path} alt="" />
                  <h4>{movie.title}</h4>
                </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Create;
