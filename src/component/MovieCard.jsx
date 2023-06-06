export default function MovieCard(movies, setMovies) {

const handleDelete = (id) =>
{
  const moviesCopy = [...movies]
  const moviesUpdate = moviesCopy.filter((movie) => movie.id !== id);
  setMovies(moviesUpdate);
}
  return (
    <div>
      { movies === null ? "Loading..." : movies.map((movie) => 
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h3>{movie.category}</h3>
          <p>Like : {movie.likes} Dislike:{movie.dislikes}</p>
          <button onClick={() => handleDelete(movie.id)}>X</button>
          
          </div>) }
    </div>
  )
}
