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
      <div className="flex-col md:grid md:grid-cols-2 md:gap-2 place-items-center">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <MovieCard  movie={movie} />
          </div>
        ))}
      </div>
  
      </div>
    );
  };
