import React from 'react'

function Footer() {
    const aYear = new Date().getFullYear()
  return (
    <div>
        <div className ="invisible md:visible pt-14 pb-12" >
            <ul className=" flex justify-evenly text-lg font-normal  text-blue-900">
                <li>Home</li>
                <li>About</li>
                <li>Technolgies</li>
                <li>Projects</li>
                <li> copy right : {aYear} developed by Jemimah Chepyego</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer