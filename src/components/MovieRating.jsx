import React, { useContext, useState } from 'react'
import { MovieContext } from '../main';

export default function MovieRating({id, likes, dislikes}) {
  
  const {movies, setMovies} = useContext(MovieContext);
  const [currentLike, setCurrentLike] = useState("none");
  const moviesCopy = [...movies];

  const handleVote = (likeButton) => {
    
    if (currentLike === 'none') 
    {
      const vote = 1;
      handleUpdate(id, vote, likeButton, 0)
    }
    else if (likeButton === currentLike)
    {
      console.log("deja liker")
      return
  }
  else if (currentLike !== likeButton)
  {
    console.log("dislike become like !")
    handleUpdate(id, 1, likeButton, 1)



  }
  setCurrentLike(likeButton)
}

const handleUpdate = (id, vote, likeButton, set) => {
  const updatedData = moviesCopy.map((movie) => {
    if (movie.id === id && likeButton === true && set === 0) {
      return { ...movie, likes: likes + vote};
    }
    else if (movie.id === id && likeButton === false && set === 0) {
      return { ...movie, dislikes: dislikes + vote};
    }


    if (movie.id === id && likeButton === true && set === 1) {
      return { ...movie, likes: likes + vote, dislikes: dislikes -1 };
    }
    else if (movie.id === id && likeButton === false && set === 1) {
      return { ...movie, dislikes: dislikes + vote, likes: likes -1 };
    }

    return movie;
  });

  setMovies(updatedData);

}

  return (
    <div> 
        <p>{likes} {dislikes} </p>
    <button onClick={() => handleVote(true)}>L</button>
    <button onClick={() => handleVote(false)}>D</button>
    </div>
  )
}
