import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { movies$ } from './movies.js';

export const MovieContext = React.createContext();

const Root = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setMovies(await movies$);
    };
    fetchData();
  }, []);

  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MovieContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
