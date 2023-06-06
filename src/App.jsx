import MovieCard from "./component/MovieCard.jsx";
import { MovieContext } from "./main.jsx";
import { useContext } from "react"


function App() {
  const {movies, setMovies} = useContext(MovieContext);




  return (
    <div className="App">
        { movies === null ? "Loading..." : movies.map((movie) => 
        <div key={movie.id}>
          <MovieCard movie={movie} />
          
          </div>) }
    </div>
  );
}

export default App;