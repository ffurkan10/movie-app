import "./styles/style.scss";
import { Navbar } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/moviedetails/MovieDetails";
import Home from "./pages/home/Home";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
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
  console.log(detail);
  const nextClick = () => {
    setPage((page) => page + 1);
  };

  const prevClick = () => {
    setPage((page) => page - 1);
  };
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__list">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  detail={detail}
                  nextClick={nextClick}
                  prevClick={prevClick}
                  setDetail={setDetail}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
