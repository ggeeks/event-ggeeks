import Image from 'next/image'
import React from 'react'
import arcade from '../assets/event/ev-arcade_month.png'
import bgmi from "../assets/event/ev-bgmi_tournament.png"
import bgmiWeek from '../assets/event/ev-bgmi_week.png'
import chess1 from "../assets/event/ev-chess1.png"
import chess2 from "../assets/event/ev-chess2.png"
import gamedev from '../assets/event/ev-game_development.png'
import gamerdays from "../assets/event/ev-gamerdays.png"
import ludo from '../assets/event/ev-ludo.png'
import skribble from '../assets/event/ev-skribbl.png'
import trip from "../assets/event/ev-trip.png"
import webgame from "../assets/event/ev-webgamedev.png"

function Gallery() {
  return (
    <div>
      <h1 className='text-4xl'>Gallery</h1>
      <div className='px-2 py-7 '>
        <h1 className='text-2xl'>Our Events</h1>
        <div>
          <div className='flex flex-row justify-evenly py-10'>
            <Image src={arcade} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={bgmi} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={bgmiWeek} alt='' width={250} height={250} objectFit='contain'/>
          </div>
          <div className='flex flex-row justify-evenly py-10 '>
            <Image src={chess1} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={chess2} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={gamedev} alt='' width={250} height={250} objectFit='contain'/>
          </div>
          <div className='flex flex-row justify-evenly py-10'>
            <Image src={ludo} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={skribble} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={trip} alt='' width={250} height={250} objectFit='contain'/>
          </div>
          <div className='flex md:flex-row flex-col justify-evenly py-10'>
            <Image src={gamerdays} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={webgame} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={arcade} alt='' width={250} height={250} objectFit='contain'/>
          </div>
        </div>
      </div>
      <div className='px-2 py-7 '>
        <h1 className='text-2xl'>Glimpes of Events</h1>
        <div>
        <div className='flex flex-row justify-evenly py-10'>
            <Image src={arcade} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={arcade} alt='' width={250} height={250} objectFit='contain'/>
            <Image src={arcade} alt='' width={250} height={250} objectFit='contain'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery