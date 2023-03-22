
import login from '../images/login.png'
import Wiseleger from '../images/Wiseleger.png'
import Zuric from '../images/Zuric.png'

import {AiOutlineGithub} from 'react-icons/ai'
import { AiOutlineLink} from 'react-icons/ai'
import React from 'react'

function Project() {
  return (
    <div>
        <div className="text-center mb-28 mt-40 ">
            <h1 className="about-p">Projects</h1>
            <p className="text-xl font-family-custom text-gray-600">Things that i have built</p>
        </div>
        <div className="md:ml-20 ml-4 mb-40  flex flex-wrap gap-8">
            <div className=" rounded-3xl max-h-fit  max-w-fit  w-96 shadow-md hover:bg-gray-100 ">
                <img src={Wiseleger}/>
                <h2 className=" text-center py-6 text-xl text-black font-family-custom font-medium">Wise leger web application</h2>
                <p className=" font-light font-family-custom mx-6 text-lg text-gray-600">This is was a capstone project.It is web application for SMES where it helps them manage account and booking</p>
                 <p className=" mx-6 mb-4 text-sm font-light text-gray-600 font-family-custom text-center my-3"><span className="text-blue-900">Tech Stack:</span> HTML, Tailwindcss,React, Ruby on rails</p>
                 <p className="pb-6 flex justify-center gap-x-8"><span className="mr-0"><AiOutlineLink/></span><a href="https://group-69-chepyego.vercel.app/" target="_blank">live preview</a><AiOutlineGithub/><a href="https://github.com/chepyego/Group-69" target="_blank">View Code</a></p>
            
            </div>

            <div className=" rounded-3xl max-h-fit  max-w-fit  w-96 shadow-md hover:bg-gray-100 ">
                <img src={Zuric}/>
                <h2 className=" text-center py-6 text-xl text-black font-family-custom font-medium">Zuric Motors Mombasa</h2>
                <p className=" font-light font-family-custom mx-6 text-lg text-gray-600">THis is a website for a car dealership compay that sells and buys cars</p>
                 <p className=" mx-6 mb-4 text-sm font-light text-gray-600 font-family-custom text-center my-3"><span className="text-blue-900">Tech Stack:</span> HTML, Tailwindcss, Ruby on rails</p>
                 <p className=" pb-6 flex justify-center gap-x-8"><span className="mr-0"><AiOutlineLink/></span> live preview<AiOutlineGithub/><a href="https://github.com/chepyego/zuric-core-version-two" target="_blank">View Code</a></p>
            
            </div>

            <div className=" rounded-3xl max-h-fit  max-w-fit  w-96 shadow-md hover:bg-gray-100">
                <img src={login}/>
                <h2 className=" text-center py-6 text-xl text-black font-family-custom font-medium">Login page</h2>
                <p className=" font-light font-family-custom mx-6 text-lg text-gray-600">This is a login page, it was an asignment given during the women techsters fellowship</p>
                 <p className=" mx-6 mb-4 text-sm font-light text-gray-600 font-family-custom  my-3"><span className="text-blue-900">Tech Stack:</span> HTML, Tailwindcss, Ruby on rails</p>
                 <p className="  pb-6 flex justify-center gap-x-8"><span className="mr-0"><AiOutlineLink/></span><a href="https://chepyego.github.io/" target="_blank">live preview</a> <AiOutlineGithub/><a href="https://github.com/chepyego/chepyego.github.io">View Code</a></p>
            
            </div>

            
        </div>
    </div>
  )
}

export default Project