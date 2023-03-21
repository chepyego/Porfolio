import {Link} from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import React from 'react'

function Header() {
  return (
    <div>

       <nav className ="py-8 bg-white-700 mt-16">
        <div className="absolute left-9 ">Logo</div>
        <div>
          <ul className="text-gray-800  flex justify-end gap-x-10 font-sans font-medium ">
            <li> 
              <Link to='/'>Home</Link>
              </li>
            <li> 
              <Link to='/about'>About</Link></li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contacts</li>
            <li><AiFillGithub/></li>
            <li><AiFillTwitterCircle/></li>
            <li className="mr-20"><AiFillLinkedin/></li>
          </ul>

        </div>
       </nav>
    </div>
  )
}

export default Header