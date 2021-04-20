import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    getMovies(API);
  }, []);

  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();

    if (item) {
      getMovies(SEARCH + item);
      setItem("");
    }
  };

  const handleOnChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <header>
        <form onSubmit={handlerOnSubmit}>
          <input
            type="search"
            className="search"
            value={item}
            onChange={handleOnChange}
            placeholder="Search..."
          />
          <button type="submit" className="btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>

      <div className="container">
        {movies.length > 0 &&
          movies.map((i) => <Movie key={movies.id} {...i} />)}
      </div>
    </div>
  );
}

export default App;
