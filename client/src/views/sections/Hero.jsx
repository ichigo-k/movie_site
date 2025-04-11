import React from 'react'
import Movies from '../pages/Movies'
import ContentDisplay from '../components/ContentDisplay'

function Hero({imgUrl, movies}) {
  
  return (
    <section>
        <img 
        src={imgUrl} 
        alt="" 
        className='w-screen lg:h-screen md:h-[30rem] h-[18rem]'
        />

        <div 
        className='lg:h-screen bg-black/50 z-40 absolute top-0  w-full md:h-[30rem] h-[18rem]'></div>

        <div className='absolute w-full flex space-x-2  lg:top-[23rem] md:top-[15rem] top-[8rem] z-50 overflow-x-auto p-4 justify-between no-scrollbar '>
        <ContentDisplay 
        movies={movies}
        />
        </div>
      </section>
  )
}

export default Hero



