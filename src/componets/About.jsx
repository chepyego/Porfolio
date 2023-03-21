import {BsCalendarDate} from 'react-icons/bs'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import React from 'react'

function About() {
  return (
    <div className="ml-28">

      <div className="">
        <h1 className="about-p my-6">About me</h1>
        <p className="text-lg text-gray-800">I am a Full stack software developer with one year of experience in developing web applications
            using various web technologies. Skilled in various modern web technologies and research
            more on the current web trends and how to effectively use each tool</p>
     </div>
     <div>
       <h1 className="about-p my-6">Work Experience</h1>
       <div className="flex justify-between">
          <div>
            <p className="mb-4 text-gray-800 tracking-wide font-normal text-xl">Junior Web Developer</p>
            <p className='flex justify-evenly text-gray-400 text-sm font-medium '><HiOutlineOfficeBuilding/> Leanios <span><GoLocation/>Germany</span>
            </p>
          </div>
          <div>
            <button className=" rounded-lg my-8 mx-6 bg-green-500">full time</button>
             <p>
              <BsCalendarDate/>
             </p>
          </div>

       </div>
       
     </div>

    </div>
    
  )
}

export default About