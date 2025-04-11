import React from 'react'
import video from '../../assets/tokito.mp4.mp4'

function HomeHero() {
  return (
    <section>
    <video 
    src={video} 
    alt="" 
    className='w-full lg:h-[100vh] md:h-[30rem] h-[18rem] object-cover'
    autoPlay
    loop
    muted 
    />

    <div className='lg:h-screen bg-black/50 z-40 absolute top-0  w-full md:h-[30rem] h-[18rem] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-[7rem]'>
                        <h1 className='text-md text-center md:text-2xl'>
                        Discover, Watch, and Enjoy Your Favorite Movies
                        </h1>
                     
                        <button className='mt-1 md:mt-5  bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md '>Start Watching</button>
        </div>
        
   
    </div>

   
  </section>
)
  
}

export default HomeHero