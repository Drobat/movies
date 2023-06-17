import React, { useContext} from 'react'
import { MovieContext } from '../main';
import MovieCard from './MovieCard';

export default function MoviesFilter() {
    const {movies, categories} = useContext(MovieContext);
    

    const filteredMovies = movies.filter((movie) => {
      if (categories.length === 0) {
        return true;
      } else {

        return categories.includes(movie.category);
      }
    });
  
    
    return (
      <div className='p-10'>
      <div className="grid grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
  
      </div>
    );
  };
