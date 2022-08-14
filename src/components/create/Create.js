import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Create = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US`
      )
      .then((res) => {
        setDetails(res.data);
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

  return (
    <div className="create__container">
      <div className="create__main">
        <div className="create__main__title">
          <h1>{details.title}</h1>
          <span className={`tag ${setVoteClass(details.vote_average)}`}>
            {details.vote_average?.toFixed(1)}
          </span>
        </div>
        <div className="create__main__detail">
          <img src={IMG_API + details.backdrop_path} alt="" />
          <div className="create__main__detail__text">
            <p>{details.overview}</p>
            <a href={details.homepage}>Click for original website</a>
          </div>
        </div>
      </div>

      <div className="create">
        <h2>Similar Movies</h2>
        <div className="create__similar">
          {similar.map((movie) => (
            <Link
              state={{
                similar: similar.filter((item) => item.id === movie.id),
              }}
              to={`/movie/${movie.id}`}
            >
              <ul className="create__similar__ul" key={movie.id}>
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
