import React,{Suspense} from 'react';
import { Link } from 'react-router-dom';

function ContentDisplay({ movies }) {
  if (!movies || movies.length === 0) {
    // If no movies data is available, display a placeholder
    const unavailableMovies = Array.from({ length: 20 }, (_, index) => ({ id: index }));
    return (
      
        unavailableMovies.map((item,key) =>(
             <div className='bg-gray-700 max-w-[5rem] min-w-[5rem] md:max-w-[8rem] md:min-w-[8rem] lg:max-w-[11rem] lg:min-w-[11rem] rounded-md shadow-2xl transition-all duration-300 transform md:hover:-translate-y-2 ease-out h-[7rem] md:h-[10rem] lg:h-[15rem] animate-pulse '>
                
             </div>
        ))
      
    );
  }

  // If movies data is available, render the movies
  return (
    movies.map((item, index) => (
      <Link to={`/watch?data=${encodeURIComponent(JSON.stringify(item))}`} key={index}>
        <img
          src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path ||item.backdrop_path }`  : `https://placehold.co/200x300@3x.png?text=${item.name}`}
          className='text-white max-w-[5rem] md:max-w-[8rem] lg:max-w-[11rem] rounded-md shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ease-out object-cover  '
          alt={`Movie ${index}`}
        />
      </Link>
    ))
  );
}

export default ContentDisplay;