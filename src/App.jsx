import { useEffect, useState } from "react";
import GetMovies from "./components/GetMovies";
import { movies$ } from './movies.js';
import { MovieContext } from "./main";
import MovieRating from "./components/MovieRating";
import MoviesFilter from "./components/MoviesFilter";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovies(await movies$);
    };
    fetchData();
  }, []);

  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <div className="App">
      <MovieContext.Provider value={contextValue}>
       <GetMovies />
      </MovieContext.Provider>
    </div>
  );
}

export default App;