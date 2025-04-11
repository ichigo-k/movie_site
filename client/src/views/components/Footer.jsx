import React from 'react'
import { FaGithub , FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {

    const footerLinks =[
        {icon:<FaGithub/> , href:"https://github.com/ichigo-k"},
        {icon:<FaTwitter/> , href:"/"},
        {icon:<FaLinkedinIn/> , href:"www.linkedin.com/in/kephas-tetteh-617631267"},
        {icon:<IoIosMail/> , href:"mailto:tetthkephas@outlook.com"},
    ]
  return (
    <footer  className="flex flex-col justify-center py-4 text-gray-500 items-center text-center border-t border-gray-400">
      <div className='flex w-full mb-3'>
      <div className='w-1/3'>
      <div className="flex-shrink-0">
        <a href="/" className="text-white font-bold md:text-3xl text-md ">Movie <span className="text-blue-500">Zone</span></a>
        </div>
      </div>

      <div className='w-1/3 flex md:space-x-8 space-x-2 justify-center md:text-3xl text-md'>
        {
            footerLinks.map(({icon,href},index)=>{
                return(
                    <a className='bg-gray-900 p-1 rounded-full' href={href} key={index}>{icon}</a>
                )
            })
        }
        
      </div>

      <div className='w-1/3'>
        Ichigo 🔥
      </div>

      </div>
     

      <div className='flex justify-center items-center'>
      <p>&copy; {new Date().getFullYear()} GCTU. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer