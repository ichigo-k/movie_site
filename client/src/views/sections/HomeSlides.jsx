import React from 'react'
import getData from '../../functions/getData'
import ContentDisplay from '../components/ContentDisplay'

function HomeSlides({title, url}) {
  
    let movies = getData(url , url)
  return (
    <div className='bg-gray-900 drop-shadow-lg mb-3 pt-3'>
        <h1 className='px-2 uppercase pl-4 font-semibold leading-5 text-xl md:text-3xl md:py-4 py-2'>{title}</h1>
        <div className='flex overflow-x-auto p-4 gap-2 justify-between no-scrollbar'>
            <ContentDisplay movies={movies.movies}/> 
        </div>
    </div>
  )
}

export default HomeSlides