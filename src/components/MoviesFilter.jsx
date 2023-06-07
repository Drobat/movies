import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../main';
import MovieCard from './MovieCard';

export default function MoviesFilter() {
    const {movies, setMovies} = useContext(MovieContext);
    const [categories, setCategories] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
      const allCategories = movies.map((movie) => movie.category);
      const uniqueCategories = [...new Set(allCategories)];
      setUniqueCategories(uniqueCategories);
    }, [movies]);
  
    const handleCategoryChange = (category) => {
      const index = categories.indexOf(category);
      if (index > -1) {
        setCategories(categories.filter((cat) => cat !== category));
      } else {
        setCategories([...categories, category]);
      }
    };
  
    const filteredMovies = movies.filter((movie) => {
      if (categories.length === 0) {
        return true;
      } else {

        return categories.includes(movie.category);
      }
    });
  
    return (
      <div>
        <h2>Catégories</h2>
        <ul>
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
        <h2>Films</h2>
   
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
  
      </div>
    );
  };

