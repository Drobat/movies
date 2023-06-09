import { useEffect, useState } from "react";
import GetMovies from "./components/GetMovies";
import { movies$ } from './movies.js';
import { MovieContext } from "./main";
import { useQuery } from 'react-query';
import { QueryClient, QueryClientProvider } from 'react-query';



function App() {

  const [movies, setMovies] = useState([]);
  const queryClient = new QueryClient();

  

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
  };

  return (
    <div className="App">
      <MovieContext.Provider value={contextValue}>
       <GetMovies />
      </MovieContext.Provider>
      
    </div>
  );
}

export default App;