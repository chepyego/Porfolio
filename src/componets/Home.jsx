import jem from '../images/jem.png'
import '../styles/Header.css' 
import React from 'react'

function Home() {
  return (
    <div className='md:flex justify-between mt-48 md:mx-48 mx-6 pb-32 '>
        <div>
            <h1 className=" about-text about-color">Hi 👋,<br></br>
             My name is<br></br> 
             <span className='about-gradient-color'>Jemimah Chepyego</span><br></br>
             I build things for web </h1>


        </div>
        <div>
        <div className=""><img className='img border-b-blue-800 border-t-pink-900 border-4  rounded-full w-96 h-96' src={jem} alt="person profile"/></div>


        </div>
    </div>
  )
}

export default Home