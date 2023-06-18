import { useEffect, useState } from "react";
import { movies$ } from './movies.js';
import { MovieContext } from "./main";
import { useQuery } from 'react-query';
import MoviesFilter from "./components/MoviesFilter";
import './input.css';
import Navbar from "./components/Navbar";
import InfiniteScroll from 'react-infinite-scroll-component';



function App() {

  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const itemsPerPage = 6; 


  const [hasMore, setHasMore] = useState(true); // Indicateur pour savoir s'il y a plus d'éléments à charger
  const [page, setPage] = useState(1);
  

  const fetchMoreMovies = async () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const movies = await movies$; // Attendre que la promesse se résolve et obtenir les données des films
  
    const newMovies = movies.slice(startIndex, endIndex);
  
    setMovies(prevMovies => [...prevMovies, ...newMovies]);
    setPage(prevPage => prevPage + 1);
    setHasMore(newMovies.length === itemsPerPage);
  };

  useEffect(() => {
    const fetchInitialMovies = async () => {
      const initialMovies = await movies$;
      setMovies(initialMovies);
    };

    fetchInitialMovies();
  }, []);

  const contextValue = {
    movies,
    setMovies,
    categories,
    setCategories,
    isButtonDisabled, 
    setIsButtonDisabled,
  };

  return (
    <div className='bg-blue-damas min-h-screen'> 
      <MovieContext.Provider value={contextValue}>
      <Navbar />
      <InfiniteScroll
  dataLength={movies.length} // Nombre d'éléments déjà chargés
  next={fetchMoreMovies} // Fonction à appeler pour charger plus d'éléments
  hasMore={hasMore} // Indicateur s'il y a plus d'éléments à charger
  loader={<p>Loading...</p>} // Composant à afficher pendant le chargement
  endMessage={<p>No more movies to load</p>} 
>
  <MoviesFilter />
</InfiniteScroll>
      </MovieContext.Provider>
      
    </div>
  );
}

export default App;