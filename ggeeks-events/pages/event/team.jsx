import Link from 'next/link'
import React from 'react'
import Register from "../register"
import { IoIosArrowBack } from 'react-icons/io'
import bgmi from "../../assets/games/bgmi.png"
import valorant from "../../assets/games/valorant.png"
import Image from 'next/image'
import BgmiTeam from '../forms/team-form/bgmi-team'
import ValorantTeam from '../forms/team-form/valorant-team'
const Teams = () => {
  return (
    <div>
      <Link to={<Register />} href='../../register' alt=''>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className='md:text-xl text-md' >Back</button>
        </div>
      </Link>

      <h1 className='md:text-5xl sm:text-2xl text-xl '>Teams Registration</h1>
      <div className='py-5'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <Link href='../forms/team-form/valorant-team' alt='valo-team' to={<ValorantTeam/>}>
            <div>

            <div className='blue-glassmorphism md:w-11/12 px-3 cursor-pointer py-2 m-5 w-5/6'>
              <Image src={valorant} alt="valorant" />
              <h2 className='text-xl'>Valorant</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' >Register</button>
            </div>
          </Link>
          <Link href='../forms/team-form/bgmi-team' alt='bgmi-team' to={<BgmiTeam/>}>
            <div>
              
            
            <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
              <Image src={bgmi} alt="bgmi" />
              <h2 className='text-xl'>BGMI</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-2xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' >Register</button>
            </div>
            
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Teams