import MovieCard from "./component/MovieCard.jsx";
import useToggle from "./hooks/useToggle.jsx";
import { movies$ } from "./movies.js"
import { useState, useEffect } from "react"


function App() {
  const [movies, setMovies] = useState(null);
  const [active, setActive] = useState("none");

  useEffect(() => {
    const fetchData = async () => {
        setMovies(await movies$);
    }
    fetchData();
  }, [])

const handleDelete = (id) =>
{
  const moviesCopy = [...movies]
  const moviesUpdate = moviesCopy.filter((movie) => movie.id !== id);
  setMovies(moviesUpdate);
}

const handleLike = (id) => {
  const moviesCopy = [...movies];
  const updatedMovies = moviesCopy.map((movie) => {
    if (movie.id === id) {
      if (active === "like") {
        return movie;
      } else if (active === "dislike") {
        return { ...movie, likes: movie.likes + 1, dislikes: movie.dislikes - 1 };
      } else {
        return { ...movie, likes: movie.likes + 1 };
      }
    }
    return movie;
  });
  setMovies(updatedMovies);
  setActive("like");
}

const handleDislike = (id) =>
{
  const moviesCopy = [...movies];
    const updatedMovies = moviesCopy.map((movie) => {
      if (movie.id === id) {
        if (active === "dislike") {
          return movie;
        } else if (active === "like") {
          return { ...movie, dislikes: movie.dislikes + 1, likes: movie.likes - 1 };
        } else {
          return { ...movie, dislikes: movie.dislikes + 1 };
        }
      }
      return movie;
    });
    setMovies(updatedMovies);
    setActive("dislike");
}
  return (
    <div className="App">
        { movies === null ? "Loading..." : movies.map((movie) => 
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h3>{movie.category}</h3>
          <p>Like : {movie.likes} <button onClick={() => handleLike(movie.id)}>O</button>
          Dislike:{movie.dislikes} <button onClick={() => handleDislike(movie.id)}>W</button></p>
          <button onClick={() => handleDelete(movie.id)}>X</button>
          
          </div>) }
    </div>
  );
}

export default App;