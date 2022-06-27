import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import individual from '../assets/reg/individual.png'
import team from "../assets/reg/team.png"
// import Router from 'next/router'
import Solo from './event/solo.jsx'
import Teams from "./event/team.jsx"

function Register() {

  return (
    <div className='revamp' >
      <div><h1 className='md:text-5xl text-2xl'>Register</h1></div>
      <div className='flex md:flex-row flex-col justify-evenly'>
        <div className='justify-center'>
          <h1 className='md:text-3xl text-lg px-5 py-3'>
            SOLO
          </h1>

          <Link to={<Solo />} href='./event/solo' className='cursor-pointer'>
            <div className='flex flex-col cursor-pointer py-3 px-1'>
              <Image src={individual} width={300} height={300} alt="solo" className='' />
              <button className='md:text-2xl  hover:text-orange-500 hover:bg-white  lg:text-3xl text-lg px-3 py-1 rounded-2xl my-2 border '>Register solo</button>
            </div>
          </Link>

        </div>
        <div className=' justify-center'>
          <h1 className='md:text-3xl text-lg   px-5 py-3 '>
            Team
          </h1>
          <Link to={<Teams />} href='./event/team' className='cursor-pointer'>
            <div className='flex flex-col cursor-pointer py-3 px-1'>
              <Image src={team} width={300} height={300} alt="solo" className='' />
              <button className='md:text-2xl sm:text-xs lg:text-3xl   hover:text-orange-500 hover:bg-white  text-lg px-3 py-1 rounded-2xl my-2 border '>register team</button>
            </div>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Register
