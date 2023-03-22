import {AiFillGithub} from 'react-icons/ai'
import {FaGitAlt} from 'react-icons/fa'
import {SiSqlite} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiRubyonrails} from 'react-icons/si'
import {DiRuby} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import { SiTailwindcss} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import React from 'react'

function TechStack() {
  return (
    <div>
      <div className=" mt-32 text-center">
        <h1 className="about-p">My Tech stack</h1>
        <p className="mt-4 text-xl  font-normal font-family-custom text-gray-600">Technologies I have been working with</p>
      </div>
      <div>
        <ul className=" mt-24 flex flex-1 flex-wrap gap-20 m-6">
          <li className=" text-8xl text-orange-500 "><AiFillHtml5/></li>
          <li className="text-8xl text-blue-600"><DiCss3/></li>
          <li className="text-8xl text-yellow-400 "><SiJavascript/></li>
          <li className="text-8xl text-blue-400"><DiReact/></li>
          <li className="text-8xl text-blue-400"><SiTailwindcss/></li>
          <li className="text-8xl text-purple-600 "><FiFigma/></li>
          <li className="text-8xl text-red-500"><DiRuby/></li>
          <li className="text-8xl text-red-500"><SiRubyonrails/></li>
          <li className="text-8xl text-blue-900"><SiPostgresql/></li>
          <li className="text-8xl text-blue-900"><SiSqlite/></li>
          <li className="text-8xl text-red-500"><FaGitAlt/></li>
          <li className="text-8xl text-black"><AiFillGithub/></li>

        </ul>
      </div>
    </div>
  )
}

export default TechStack