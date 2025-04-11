import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineSearch } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
    const [show, setShow] =useState(false)
    const [search, setSearch] =useState(false)
   let nav_items =[{name:"Movies",link: "/movies"},{name:"Tv Shows", link : "/tv"}]

   function  showMenu(){
    setShow(!show)
    setSearch(false)
   }

   function showSearch(){
       setSearch(!search)
       setShow(false)
   }
  return (
    <nav className="md:p-4 max-sm:py-4 px-1 w-full z-50 bg-transparent absolute">
    <div className=" md:px-2 ">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
        <a href="/" className="text-white font-bold text-3xl  ">Movie <span className="text-blue-500">Zone</span></a>
        </div>


        
        <div className="hidden md:flex md:items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white py-2 px-4 rounded-lg focus:outline-none ring-1 ring-white"
          />
          <ul className="flex space-x-6 ml-8">
           {
            nav_items.map((item,key) =>{
                return(
                    <li>
                         <NavLink
                                key={key}
                                to={item.link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-md px-2" : "text-white"
                                }
                                >
                                {item.name}
                         </NavLink>
                    </li>
                )
            })
           }
          </ul>
        </div>
        <div className="md:hidden">
          
          <div className='flex space-x-2 p-1'>
            <MdOutlineSearch className='bg-gray-700 p-1 rounded-full text-4xl'onClick={showSearch}/>
            <HiMenuAlt3 className='bg-gray-700 p-1 rounded-md text-4xl'  onClick={showMenu}/>
          </div>
        </div>
        <div className={`absolute  right-0 top-[4rem] mx-6 bg-slate-900 p-4 px-10 rounded-lg drop-shadow-2xl ${ show ? "block" : "hidden"  }`}>
        <ul className="flex  space-x-6">
           {
            nav_items.map((item, key) =>{
                return(
                    <li>
                         <NavLink
                                key={key}
                                to={item.link}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-md px-2" : "text-white"
                                }
                                 onClick={showMenu}
                                >
                                {item.name}
                         </NavLink>
                    </li>
                )
            })
           }
          </ul>
         

        </div>
        <div className={`absolute  right-0 top-[4rem] mx-6 bg-slate-900 p-4 px-10 rounded-lg drop-shadow-2xl ${ search ? "block" : "hidden"  }`}>
          <input  type='text' placeholder='Search' className='p-1 rounded-md text-black w-full focus:outline-none '/>
        </div>

      </div>
    </div>
  </nav>
  )
}

export default Navbar