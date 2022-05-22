import React from 'react'
import Register from '../Register'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io"
import Amongus from "../../assets/games/among-us.png"
import bgmi from "../../assets/games/bgmi.png"
import chess from "../../assets/games/chess.png"
import cod from "../../assets/games/cod.png"
import skribble from "../../assets/games/skribble.png"
import valorant from "../../assets/games/valorant.png"
import Image from 'next/image'
const Solo = () => {
  return (
    <div>
      <Link to={<Register />} href='../../Register' alt=''>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
      </Link>
      <h1 className='text-3xl'>Solo Registration</h1>
      <div className='py-5'>
        <div className='flex md:flex-row flex-col justify-evenly'>
          <div>
            <Image src={Amongus} width={200} height={200} alt="among-us" />
            <h2 className='text-xl'>Among Us</h2>
          </div>
          <div>
            <Image src={bgmi} width={200} height={200} alt="bgmi" />
            <h2 className='text-xl'>BGMI</h2>
          </div>
          <div>
            <Image src={chess} width={200} height={200} alt="chess" />
            <h2 className='text-xl'>Chess</h2>
          </div>
        </div>
        <div className='flex md:flex-row flex-col justify-evenly mt-5'>
          <div>
            <Image src={cod} width={200} height={200} alt="cod" />
            <h2 className='text-xl'>Call of Duty</h2>
          </div>
          <div>
            <Image src={skribble} width={200} height={200} alt="skribble" />
            <h2 className='text-xl'>Skribble</h2>
          </div>
          <div>
            <Image src={valorant} width={200} height={200} alt="valorant" />
            <h2 className='text-xl'>Valorant</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solo