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
import AmongUsSolo from "../forms/solo-form/AmongUs"
import BgmiSolo from "../forms/solo-form/Bgmi"
import ChessSolo from "../forms/solo-form/Chess"
import CODMSolo from "../forms/solo-form/CODM"
import SkribbleSolo from "../forms/solo-form/skribble"
import ValorantSolo from "../forms/solo-form/Valorant"


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
        <Link  href='../forms/solo-form/AmongUs' to={<AmongUsSolo/>}  alt='amongus-solo'>
          <div className='grad-border'>
            <Image src={Amongus} height={270} alt="among-us" />
            <h2 className='text-xl'>Among Us</h2>
            
          </div>
          </Link>
          <Link href='../forms/solo-form/Bgmi' to={<BgmiSolo/>} alt='BGMI'>
          <div className='grad-border'>
            <Image src={bgmi}   alt="bgmi" />
            <h2 className='text-xl'>BGMI</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/Chess' to={<ChessSolo/>} alt='chess'>
           <div className='grad-border'>
            <Image src={chess}   alt="chess" />
            <h2 className='text-xl'>Chess</h2>
          </div>
          </Link>
        </div>
        <div className='flex md:flex-row flex-col justify-evenly mt-5'>
          <Link href='../forms/solo-form/CODM' alt='cod' to={<CODMSolo/>}>
          <div className='grad-border'>
            <Image src={cod}   alt="cod" />
            <h2 className='text-xl'>Call of Duty</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/Skribble' alt='skribble' to={<SkribbleSolo/>}>
          <div className='grad-border'>
            <Image src={skribble}   alt="skribble" />
            <h2 className='text-xl'>Skribble</h2>
          </div>
          </Link>
          <Link href='../forms/solo-form/Valorant' alt='valorant' to={<ValorantSolo/>}> 
          <div className='grad-border' >
            <Image src={valorant}  alt="valorant" />
            <h2 className='text-xl'>Valorant</h2>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Solo