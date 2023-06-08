import { useContext } from "react";
import { MovieContext } from "../main";
import MovieRating from "./MovieRating";

export default function MovieCard({movie}) {

  const {movies, setMovies} = useContext(MovieContext);

  const handleDelete = (id) =>
  {
    const moviesCopy = [...movies]
    const moviesUpdate = moviesCopy.filter((movie) => movie.id !== id);
    setMovies(moviesUpdate);
  }
  return (
    <div>
      <h1>{movie.title}</h1>
          <h3>{movie.category}</h3>
          <div> <MovieRating id={movie.id} likes={movie.likes} dislikes={movie.dislikes} /> </div>
          <button onClick={() => handleDelete(movie.id)}>X</button>
    </div>
  )
}

