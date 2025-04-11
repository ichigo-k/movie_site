import React from 'react'
import ContentDisplay from '../components/ContentDisplay'
import getData from '../../functions/getData'

function CategoryPages({url}) {
  
  let movies = getData(url , url)
  console.log(movies.movies)

  return (
    <div className='flex flex-wrap py-2 justify-center gap-[1rem] lg:gap-[2rem] mb-2 max-sm:gap-[0.5rem]'>
      <ContentDisplay movies={movies.movies}/>
    </div>
  )
}

export default CategoryPages