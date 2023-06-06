import MovieCard from "./component/MovieCard.jsx";
import { MovieContext } from "./main.jsx";
import { movies$ } from "./movies.js"
import { useState, useEffect, useContext } from "react"


function App() {
  // const [movies, setMovies] = useState(null);
  const {movies, setMovies} = useContext(MovieContext);

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

  return (
    <div className="App">
        { movies === null ? "Loading..." : movies.map((movie) => 
        <div key={movie.id}>
          <MovieCard movie={movie} handleDelete={handleDelete} />
          
          </div>) }
    </div>
  );
}

export default App;