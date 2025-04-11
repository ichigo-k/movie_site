import React from 'react'
import HomeHero from '../sections/HomeHero'
import HomeSlides from '../sections/HomeSlides'


function Home() {
  
  return (
   <>
    <HomeHero />
    <HomeSlides title="Recommended" url="/movies/popular"/>
    <HomeSlides title="Trending" url="/movies/trending"/>
    <HomeSlides title="Editor favourites" url="/movies/top_rated"/>
    <HomeSlides title="Series" url="/tvShows/trending"/>


   </>
  )
}

export default Home