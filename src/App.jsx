import { useEffect, useState } from "react";
import GetMovies from "./components/GetMovies";
import { movies$ } from './movies.js';
import { MovieContext } from "./main";
import { useQuery } from 'react-query';
import MoviesFilter from "./components/MoviesFilter";
import './input.css';
import Navbar from "./components/Navbar";
import { Category } from "./components/Category";


function App() {

  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  

  const { data, isLoading, isError } = useQuery('movies', async () => {
    const response = await movies$;
    return response;
  });

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error while fetching data</p>;
  } 
  const contextValue = {
    movies,
    setMovies,
    categories,
    setCategories,
    isButtonDisabled, 
    setIsButtonDisabled,
  };

  return (
    <div className='bg-blue-damas h-screen'> 
      <MovieContext.Provider value={contextValue}>
      <Navbar />
      <MoviesFilter />
      </MovieContext.Provider>
      
    </div>
  );
}

export default App;