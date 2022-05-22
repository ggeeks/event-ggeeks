import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import individual from '../assets/reg/individual.png'
import team from "../assets/reg/team.png"
import Router from 'next/router'
import Solo from './event/Solo.jsx'
import Teams from "./event/Teams.jsx"

function Register() {

  return (
    <div >
      <div><h1 className='text-5xl'>Register</h1></div>
      <div className='flex flex-row justify-evenly'>
        <div className='justify-center'>
          <h1 className='text-3xl px-5 py-3'>
            SOLO
          </h1>
          
            <Link to={<Solo/>} href='./event/Solo' className='cursor-pointer'>
            <div className='flex flex-col  py-3 px-1'>
              <Image src={individual} width={300} height={300} alt="solo" className=''/>
            <button className='text-2xl px-3 py-1 rounded-2xl my-2 border '>Register solo</button>
            </div>
            </Link>
                     
        </div>
        <div className=' justify-center'>
          <h1 className='text-3xl px-5 py-3 '>
            Team
          </h1>
          <Link to={<Teams/>} href='./event/Teams' className='cursor-pointer'>
           <div className='flex flex-col py-3 px-1'>
            <Image src={team} width={300} height={300} alt="solo" className=''/>
            <button className='text-2xl px-3 py-1 rounded-2xl my-2 border '>register team</button>
          </div>
          </Link>
        </div>
        
      </div>

    </div>
  )
}

export default Register