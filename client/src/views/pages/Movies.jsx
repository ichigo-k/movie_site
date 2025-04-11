import Hero from '../sections/Hero'
import { Outlet } from 'react-router-dom';
import CategoryNavbar from '../components/CategoryNavbar';
import getData from '../../functions/getData';
import image from '../../assets/wallpaperflare.com_wallpaper (2).jpg'
import { Suspense } from 'react';
import Placeholder from '../components/Placeholder';

function Movies() {
 
  let movies = getData("/movies/popular")
  const categories = [
    { title: "Popular", url: "/popular" },
    { title: "Now Playing", url: "/now_playing" },
    { title: "Top Rated", url: "/top_rated" },
    { title: "Upcoming", url: "/upcoming" },
  ];

  return (
    <>
      <Hero 
      imgUrl={image} 
      movies={movies.movies}/>

      <CategoryNavbar categories={categories} baseUrl={"/movies"} />

      <Suspense fallback={<Placeholder/>}>
        <Outlet />
      </Suspense>
     
    </>
  )
}

export default Movies