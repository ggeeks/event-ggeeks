import React from 'react'
import Register from '../register'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io"
import Amongus from "../../assets/games/among-us.png"
import bgmi from "../../assets/games/bgmi.png"
import chess from "../../assets/games/chess.png"
import cod from "../../assets/games/cod.png"
import skribbleImage from "../../assets/games/skribble.png"
import valorant from "../../assets/games/valorant.png"
import Image from 'next/image'
import AmongUsSolo from "../forms/solo-form/among-us"
import BgmiSolo from "../forms/solo-form/bgmi"
import ChessSolo from "../forms/solo-form/chess"
import CODMSolo from "../forms/solo-form/codm"
import SkribbleSolo from "../forms/solo-form/skribbl"
import ValorantSolo from "../forms/solo-form/valorant"


const Solo = () => {
  return (
    <div>
      <Link to={<Register />} href='../../register' alt=''>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
      </Link>
      <h1 className='text-3xl'>Solo Registration</h1>
      <div className='py-5'>
        <div className='grid md:grid-cols-3 grid-cols-1  '>
        <Link  href='../forms/solo-form/among-us' to={<AmongUsSolo/>}  alt='amongus-solo'>
          <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
            <Image src={Amongus} height={270} alt="among-us" />
            <h2 className='text-xl'>Among Us</h2>
            
          </div>
          </Link>
          <Link href='../forms/solo-form/bgmi' to={<BgmiSolo/>} alt='BGMI'>
          <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
            <Image src={bgmi}   alt="bgmi" />
            <h2 className='text-xl'>BGMI</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/chess' to={<ChessSolo/>} alt='chess'>
           <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
            <Image src={chess}   alt="chess-image" />
            <h2 className='text-xl'>Chess</h2>
          </div>
          </Link>
        
          <Link href='../forms/solo-form/codm' alt='codm-image' to={<CODMSolo/>}>
          <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
            <Image src={cod} height={900}   alt="cod" />
            <h2 className='text-xl'>Call of Duty</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/skribbl' alt='skribble' to={<SkribbleSolo/>}>
          <div className='blue-glassmorphism md:w-11/12 cursor-pointer px-3 py-2 m-5 w-5/6'>
            <Image src={skribbleImage} height={850}  alt="skribble-image" />
            <h2 className='text-xl'>Skribbl</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/valorant' alt='valorant' to={<ValorantSolo/>}> 
          <div className=' md:w-11/12 cursor-pointer rounded-2xl px-3 blue-glassmorphism py-2 m-5 w-5/6' >
            <Image src={valorant} height={650} classname='rounded-2xl' alt="valorant" />
            <h2 className='text-xl'>Valorant</h2>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Solo
