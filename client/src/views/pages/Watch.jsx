import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';



function Watch() {
  const urlParams = new URLSearchParams(window.location.search);
  const data = urlParams.get("data");
  const item = JSON.parse(decodeURIComponent(data));

  
 return (
  <>
    <section className="relative bg-gray-900 text-white ">
      <img 
        src={`https://image.tmdb.org/t/p/original${ item.backdrop_path || item.poster_path }`} 
        alt={item.name || item.title} 
        className="w-full h-screen object-cover"
      />
      <div className="absolute top-0 h-screen w-full max-lg:bg-black/50 lg:bg-gradient-to-l from-transparent to-black flex justify-center items-center p-5 lg:w-[40rem]">
        <div className="container text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">{item.name || item.title}</h3>
          <p className="text-md lg:text-lg mb-8">{item.overview}</p>
          <div className="flex flex-wrap justify-center md:justify-start mb-8">
            <div className="flex items-center mr-4 mb-4 md:mb-0">
              <span className="font-bold mr-2">Language:</span> {item.original_language}
            </div>
            <div className="flex items-center mr-4 mb-4 md:mb-0">
              <span className="font-bold mr-2">Rating:</span> {item.vote_average}/10
            </div>
            <div className="flex items-center">
              <span className="font-bold mr-2">Release:</span> {item.first_air_date || item.release_date}
            </div>
          </div>
         <Link to={`https://vidsrc.to/embed/${item.name ? "tv" : "movie"}/${item.id}`}>
         <button className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 rounded-lg text-lg hover:from-cyan-600 hover:to-blue-600 transition duration-300 animate-bounce md:mt-10" >Watch Now</button>
         </Link>
          
        </div>
      </div>
    </section>
  </>
);

  
  }  
export default Watch