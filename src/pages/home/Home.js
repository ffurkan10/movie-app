import React from "react";
import { MovieList } from "../../components";
import Input from "../../components/input/Input";

const Home = ({ detail, setDetail, prevClick, nextClick }) => {
  return (
    <div>
      <Input setDetail={setDetail} />
      <MovieList
        detail={detail}
        setDetail={setDetail}
        prevClick={prevClick}
        nextClick={nextClick}
      />
    </div>
  );
};

export default Home;
