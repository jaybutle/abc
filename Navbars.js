
import React from 'react'
import { header,about,projects,skills,contact } from '../../portfolio'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header className='flex items-center justify-between max-w-screen-lg w-95 mx-auto h-20'>
         <h2>
            <a href={header.homepage} className='text-blue-300 hover:text-blue-700 hover:underline'>
                {header.title}

            </a>
         </h2>
         <nav className='flex nav center z-[3] mr-5'>
            <ul className='flex'>
              {about && (
                <li className='ml-10'>
                  <Link to = "about">
                    About
                  </Link>
                </li>
              )}

              {projects && (
                <li className='ml-10'>
                  <Link to = "/projects">
                    projects
                  </Link>
                </li>
              )}

              {skills && (
                <li className='ml-10'>
                  <Link to = "/skills">
                    skills
                  </Link>
                </li>
              )}

              {contact && (
                <li className='ml-10'>
                  <Link to = "/contact ">
                    contact
                  </Link>
                </li>
              )} 
            </ul>
         </nav>

      </header>
    </div>
  )
}

export default Navbar