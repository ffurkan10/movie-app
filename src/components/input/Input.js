import React, { useState } from "react";
import axios from "axios";

const Input = ({ setDetail }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ccb0a8566b23ab43471cda53fed3d9e7&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((res) => {
        setDetail(res.data.results);
      });
    setSearch("");
  };

  return (
    <div>
      <form className="movie__input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
