import { useContext } from "react"
import { MovieContext } from "../main.jsx";
import MovieCard from "./MovieCard";
import MoviesFilter from "./MoviesFilter.jsx";




function GetMovies() {
  const {movies} = useContext(MovieContext);

  const filteredMovies = movies.filter((movie) => {
    if (categories.length === 0) {
      return true;
    } else {

      return categories.includes(movie.category);
    }
  });

  return (
    <div className="GetMovie">
         <h2>Films</h2>
   
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default GetMovies;