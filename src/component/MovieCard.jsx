import { useContext } from "react";
import { MovieContext } from "../main";

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
          {/* <p>Like : {movie.likes} <button onClick={() => handleLike(movie.id)}>O</button>
          Dislike:{movie.dislikes} <button onClick={() => handleDislike(movie.id)}>W</button></p> */}
          <button onClick={() => handleDelete(movie.id)}>X</button>
    </div>
  )
}
