import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

import React from 'react'

function Contacts() {
  return (
    <div className="pt-32 pb-14 border-b-2 border-gray-400">
        <h1 className=" text-center about-p font-san text-5xl  font-bold">For any questions please mail us: </h1>
        <p className="text-gradient-to-r from-sky-500 to-indigo-500 mt-4 text-2xl md:text-5xl font-san font-bold text-center">jchepego@gmail.com</p>
        <div className="invisible md:visible flex mt-80 justify-end gap-x-10">
            <ul className="flex gap-x-6">
                <li className="text-lg font-normal text-blue-900 font-sans "> +254711210437</li>
                <li className=" text-sm md:text-lg font-normal font-sans text-blue-900">jchepego@gmail.com</li>
            </ul>
            <ul className="flex justify-end mr-48 gap-x-8">
                <li className="text-2xl hover:bg-blue-900"><AiFillGithub/></li>
                <li className="text-2xl hover:bg-blue-900"><AiFillTwitterCircle/></li>
                <li className="text-2xl hover:bg-blue-900"><AiFillLinkedin/></li>
            </ul>
        </div>
    
    </div>
  )
}

export default Contacts