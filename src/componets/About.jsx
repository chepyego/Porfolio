import {BsCalendarDate} from 'react-icons/bs'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import React from 'react'

function About() {
  return (
    <div className="md:ml-28 mx-4 md:mx-0">

      <div className="">
        <h1 className="about-p my-6">About me</h1>
        <p className="text-lg text-gray-800">I am a Full stack software developer with one year of experience in developing web applications
            using various web technologies. Skilled in various modern web technologies and research
            more on the current web trends and how to effectively use each tool</p>
     </div>
     <div>
       <h1 className="about-p my-6 ">Work Experience</h1>
        <div className=" border-b-2 pb-8 flex justify-between mr-8">
            <div>
              <p className="mb-4 text-gray-800 tracking-wide font-normal text-sm md:text-xl">Junior Full stack Developer</p>
              <p className='md:mt-0 mt-8  flex  gap-0.5  md:gap-2 text-gray-400 text-sm font-medium '><span><HiOutlineOfficeBuilding/></span> Leanios <span className="md:ml-6"><GoLocation/></span>Germany(Remote)
              </p>
            
            </div>
            <div>
              <button className=" text-xs md:text-sm hover:bg-green-800 rounded-lg py-2 px-6 bg-green-200">part time</button>
              <p className="flex  mt-4  text-gray-400">
                <span className=" invisible md:visible mt-2 md:mt-0 md:text-sm text-xs mr-2 "><BsCalendarDate/></span> feb 2022 - present
              </p>
            </div>
        </div>

        <div className=" border-b-2 py-8 flex justify-between mr-8">
            <div>
              <p className="mb-4 text-gray-800 tracking-wide font-normal md:text-xl text-sm"> Full stack Developer intern</p>
              <p className='mt-8 md:mt-0 flex md:gap-2 gap-0.5 text-gray-400 text-xs md:text-sm font-medium '><span><HiOutlineOfficeBuilding/></span> Leanios <span className="ml-6"><GoLocation/></span>Germany(Remote)
              </p>
            
            </div>
            <div>
              <button className=" text-xs md:text-sm hover:bg-green-800 rounded-lg py-2 px-6 bg-green-200">internship</button>
              <p className="flex  mt-4  text-gray-400">
                <span className="md:mr-2 mr-0 invisible md:visible text-xs md:text-sm"><BsCalendarDate/></span> feb 2021 - feb-2022
              </p>
            </div>
        </div>

        <div className=" border-b-2 py-8 flex justify-between mr-8">
            <div>
              <p className="mb-4 text-gray-800 tracking-wide font-normal md:text-xl text-sm">web Developer intern</p>
              <p className='mt-8 md:mt-0 flex md:gap-2 gap-0.5 text-gray-400 text-xs md:text-sm font-medium '><span><HiOutlineOfficeBuilding/></span> Genius Dynamics <span className="ml-6"><GoLocation/></span>Kenya
              </p>
            
            </div>
            <div>
              <button className=" text-xs md:text-sm hover:bg-green-800 rounded-lg py-2 px-6 bg-green-200">industrial attachment</button>
              <p className="flex  mt-4  text-gray-400">
                <span className=" text-xs md:text-sm invisible md:visible md:mr-2"><BsCalendarDate/></span> july 2018 - sept-2018
              </p>
            </div>
        </div>
      </div>

      <div>
        <h1 className='about-p my-6'>Education</h1>
        <div className=" border-b-2 py-8 flex justify-between mr-8">
            <div>
            <p className="mb-4 text-gray-800 tracking-wide font-normal md:text-xl text-sm">Bachelor of Science Information Technology</p>

              <p className=' flex md:gap-2 gap-0.5 text-gray-400 text-xs md:text-sm font-medium '><span><HiOutlineOfficeBuilding/></span> Technical University of Mombasa <span className="ml-6"><GoLocation/></span>Kenya
              </p>
            
            </div>
            <div>
              <button className=" text-xs md:text-sm hover:bg-green-800 rounded-lg py-2 px-6 bg-green-200">full time</button>
              <p className="flex  mt-4  text-gray-400">
                <span className="mr-2 invisible md:visible md:text-sm text-xs"><BsCalendarDate/></span> sept 2016 - Dec-2020
              </p>
            </div>
        </div>
      </div>
      

    </div>
    
  )
}

export default About