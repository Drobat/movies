import { useContext, useState } from "react";
import { MovieContext } from "../main";
import MovieRating from "./MovieRating";

export default function MovieCard({movie}) {

  const {movies, setMovies, isButtonDisabled} = useContext(MovieContext);

  const handleDelete = (id) =>
  {
    const moviesCopy = [...movies]
    const moviesUpdate = moviesCopy.filter((movie) => movie.id !== id);
    setMovies(moviesUpdate);
  }
  return (
    <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-card-bg dark:border-gray-700 h-60 w-60'>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h1>
          <h3 className="text-gray-900 dark:text-white">{movie.category}</h3>
          <div className="text-grey 900 dark:text-white"> <MovieRating id={movie.id} likes={movie.likes} dislikes={movie.dislikes} /> </div>
          {isButtonDisabled === true && (
        <button onClick={() => handleDelete(movie.id)}>X</button>
      )}
    </div>
  )
}

