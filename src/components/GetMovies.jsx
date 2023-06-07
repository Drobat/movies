import { useContext } from "react"
import { MovieContext } from "../main.jsx";
import MovieCard from "./MovieCard";
import MoviesFilter from "./MoviesFilter.jsx";




function GetMovies() {
  const {movies} = useContext(MovieContext);

  return (
    <div className="GetMovie">
        { movies === null ? "Loading..." : <MoviesFilter />
}
    </div>
  );
}

export default GetMovies;