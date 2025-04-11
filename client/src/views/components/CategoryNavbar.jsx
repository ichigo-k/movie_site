import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryNavbar({ categories , baseUrl}) {
  return (
    <nav className='w-full bg-black p-3 px-8 flex justify-start items-center h-16 overflow-x-auto no-scrollbar'>
      <div>
        <ul className='flex justify-start items-center gap-8'>
          {categories.map((category, index) => (
            <li key={index} className='inline-block whitespace-nowrap'>
              <NavLink 
                to={`${baseUrl}${category.url}`} 
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-2 py-1 " : "text-white"
                }
              >
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
  
     
  
}

export default CategoryNavbar