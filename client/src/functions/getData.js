import React from 'react'
import { useEffect, useState } from 'react';

function getData(url , trigger) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch( import.meta.env.VITE_BASE_URL+ url);
          const data = await response.json();
          setMovies(data);
        } catch (error) {
          return {Error:"Something went wrong!"}
        }
      };
     
      fetchMovies();
    }, [ trigger || " "]);
  
  return (
    {movies}
  )
}

export default getData