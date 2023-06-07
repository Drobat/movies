import React, { useContext } from 'react'
import { MovieContext } from '../main';

export default function MovieRating({id, like, dislike}) {
  
  const {movies, setMovies} = useContext(MovieContext);
  const isLike = false;
  const isDislike = false; 

  const handleVote = (vote) => {
    
    if (vote === 'like') {
      console.log(vote)
      const updatedMovies = movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, like: movie.like + 1 };
        }
        return movie;
      });
      setMovies(updatedMovies);
    }
  };
  return (
    <div> 
        <p>{like} {dislike} </p>
    <button onClick={() => handleVote("like")}>L</button>
    <button onClick={() => handleVote("Dislike")}>D</button>
    </div>
  )
}
