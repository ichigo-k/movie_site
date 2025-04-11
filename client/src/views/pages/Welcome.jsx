import React from 'react'

function Welcome() {
  return (
    <div className='w-full h-screen flex justify-start items-center'>
        <div className='container text-center px-5 lg:px-20'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Welcome to Movie Zone</h1>
            <p className='font lg:text-lg mb-8 '>Hello User this site is still under development hence some features may not be working , they will be completed in the future. Also if you encounter any bugs feel free to <a href='mailto:tettehkephas@outlook.com' className='link'>send me an email</a> or <a className='link' href='https://github.com/ichigo-k/MovieZone/'>create an issue on the github repo</a>. Thanks and I hope you enjoy </p>

            <a href="/home">

            <button className='mt-1 md:mt-5  bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md ' navigate to="/home">Start Watching</button>
            </a>
            
        </div>
       

    </div>
  )
}

export default Welcome