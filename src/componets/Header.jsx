import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {useState} from 'react'
import React from 'react'

function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () =>{
    setIsOpen(!isOpen)

  }
  return (
    <div>

       <nav className ="md:py-8 bg-white-700 mt-16 ">
        <div className="absolute left-9 invisible md:visible ">Jem</div>
        <button type="button" className=' absolute top-10 right-6 text-2xl md:invisible 'onClick={toggleNav}>
         <GiHamburgerMenu />
         </button>
        <div> 
        <div className={isOpen? 'visible md:invisible': 'md:visible invisible'}>

          <ul className="text-gray-800 ml-8 md:ml-0 md:flex justify-end gap-x-10 font-sans font-medium  ">
            <li className="hover:underline "> 
              <Link to='/'>Home</Link>
              </li>
            <li  className="hover:underline "> 
              <Link to='/about'>About</Link></li>
            <li  className="hover:underline ">
              <Link to="/tech_stack">Tech Stack</Link></li>
            <li  className="hover:underline ">
              <Link to="/project">Projects</Link></li>
            <li  className="hover:underline "><Link to="/contacts">Contacts</Link></li>
            <li className="text-3xl hover:bg-gray-600"><AiFillGithub/></li>
            <li className="text-3xl  hover:bg-gray-600 ">
            
              <AiFillTwitterCircle/></li>
            <li className="mr-20 text-3xl  hover:bg-gray-600"><AiFillLinkedin/></li>
          </ul>
          </div>
        </div>
       </nav>
    </div>
  )
}

export default Header