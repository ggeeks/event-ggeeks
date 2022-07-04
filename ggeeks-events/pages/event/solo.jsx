import React from 'react'
import Register from '../register'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'
import stumbleGuys from '../../assets/games/stumble-guys.png'
import bgmi from '../../assets/games/bgmi.png'
import chess from '../../assets/games/chess.png'
import cod from '../../assets/games/cod.png'
import skribbleImage from '../../assets/games/skribble.png'
import valorant from '../../assets/games/valorant.png'
import Image from 'next/image'
import StumbleGuys from '../forms/solo-form/stumble-guys'
import BgmiSolo from '../forms/solo-form/bgmi'
import ChessSolo from '../forms/solo-form/chess'
import CODMSolo from '../forms/solo-form/codm'
import SkribbleSolo from '../forms/solo-form/skribbl'
import ValorantSolo from '../forms/solo-form/valorant'

const Solo = () => {
  return (
    <div>
      <Link to={<Register />} href="../../register" alt="">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link>
      <h1 className="text-3xl">Solo Registration</h1>
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <Link href="../forms/solo-form/chess" to={<ChessSolo />} alt="chess">
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={chess} height={970} alt="chess-image" />
              <h2 className="text-xl">Chess</h2>
              
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' onClick={()=>(<ChessSolo/>)}>Register</button>
            </div>
            
          </Link>
          
          <Link
            href="../forms/solo-form/stumble-guys"
            to={<StumbleGuys />}
            alt="stumble-guys"
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={stumbleGuys} height={1020} alt="stumble-guys" />
              <h2 className="text-xl">Stumble Guys</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' onClick={()=>(<ChessSolo/>)}>Register</button>
            </div>
            
          </Link>
          <Link
            href="../forms/solo-form/skribbl"
            alt="skribble"
            to={<SkribbleSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={skribbleImage} height={850} alt="skribble-image" />
              <h2 className="text-xl">Skribbl</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
            
          </Link>
          <Link
            href="../forms/solo-form/codm"
            alt="codm-image"
            to={<CODMSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
            <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={cod} height={950} alt="cod" />
              <h2 className="text-xl">Call of Duty</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>
          
          <Link
            href="../forms/solo-form/valorant"
            alt="valorant"
            to={<ValorantSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
            <div className=" blue-glassmorphism m-5 w-5/6 cursor-pointer rounded-2xl px-3 py-2 md:w-11/12">
              <Image
                src={valorant}
                height={680}
                classname="rounded-2xl"
                alt="valorant"
              />
              <h2 className="text-xl">Valorant</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>

          <Link href="../forms/solo-form/bgmi" to={<BgmiSolo />} alt="BGMI">
            <div className='m-5 w-5/6  px-3 py-2 md:w-11/12'>
            <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={bgmi} alt="bgmi" />
              <h2 className="text-xl">BGMI</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Solo
