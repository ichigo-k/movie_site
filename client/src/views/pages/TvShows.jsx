import React, {Suspense} from 'react'
import Hero from '../sections/Hero'
import { useState , useEffect } from 'react';
import CategoryNavbar from '../components/CategoryNavbar';
import { Outlet } from 'react-router-dom';
import getData from '../../functions/getData';
import image from '../../assets/wallpaperflare.com_wallpaper (1).jpg'
import Placeholder from '../components/Placeholder';

function TvShows() {
  let movies = getData("/tvShows/popular")

  const categories = [
    { title: "Popular", url: "/popular" },
    { title: "Top Rated", url: "/top_rated" },
    { title: "Airing Today", url: "/airing" },
    { title: "On Air", url: "/on_air" },
  ];

  return (
    
    <>
       <Hero 
       imgUrl={image}
       movies={movies.movies}
       />

      <CategoryNavbar categories={categories} baseUrl={"/tv"}/>
      <Suspense fallback={<Placeholder/>}>
        <Outlet />
      </Suspense>
     
    </>
  )
}

export default TvShows