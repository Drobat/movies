import React from 'react'

export default function MovieRating({rating}) {
   const handleVote = (rating) =>
   {
        console.log({rating})
   }
  return (
    <button onClick={() => handleVote()}>X</button>
  )
}
