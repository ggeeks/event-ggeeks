import Link from 'next/link'
import React from 'react'
import Register from "../Register"
import { IoIosArrowBack } from 'react-icons/io'
import bgmi from "../../assets/games/bgmi.png"
import valorant from "../../assets/games/valorant.png"
import Image from 'next/image'
import BgmiTeam from '../../pages/forms/team-form/BgmiTeam'
import ValorantTeam from '../../pages/forms/team-form/ValorantTeam'
const Teams = () => {
  return (
    <div>
      <Link to={<Register />} href='../../Register' alt=''>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className='md:text-xl text-md' >Back</button>
        </div>
      </Link>

      <h1 className='md:text-5xl sm:text-2xl text-xl '>Teams Registration</h1>
      <div className='py-5'>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <Link href='../forms/team-form/BgmiTeam' alt='bgmi-team' to={<BgmiTeam/>}>
            <div className='grad-border md:w-11/12 px-3 py-2 m-5 w-5/6'>
              <Image src={bgmi} alt="bgmi" />
              <h2 className='text-xl'>BGMI</h2>
            </div>
          </Link>
          <Link href='../forms/team-form/ValorantTeam' alt='valo-team' to={<ValorantTeam/>}>
            <div className='grad-border md:w-11/12 px-3 py-2 m-5 w-5/6'>
              <Image src={valorant} alt="valorant" />
              <h2 className='text-xl'>Valorant</h2>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Teams