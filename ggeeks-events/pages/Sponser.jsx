import Image from 'next/image'
import React from 'react'
import anaitik from '../assets/brand/anaitik.png'
import badelog from '../assets/brand/badelog.jpeg'
import gfg from "../assets/brand/GFG.png"
import give from "../assets/brand/give-my-certificate.png"
import travel from "../assets/brand/travelogged.png"
import youth from '../assets/brand/youth-incorporated.png'
function Sponser() {
  return (
    <div>
      <div className='text-5xl'>Sponser</div>
      <div className='flex flex-col'>
        <div className="">
          <Image src={anaitik} width={350} height={200} />
          <Image src={badelog} width={350} height={200}/>
          <Image src={gfg} width={350} height={200}/>
        </div>
        <div className=''>
          <Image src={give} width={350} height={200}/>
          <Image src={travel} width={350} height={200}/>
          <Image src={youth} width={350} height={200}/>
        </div>
      </div>
      <div className='flex text-center justify-center'>
        <h1 className='text-2xl items-center my-2 '>Want to Join us?</h1>
        <button className='rounded-2xl border text-2xl white-glassmorphism mx-3 px-2 py-1'> Contact us</button>
      </div>

    </div>
  )
}

export default Sponser