import "./styles/style.scss";
import { Create, MovieList, Navbar } from "./components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app__list">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
