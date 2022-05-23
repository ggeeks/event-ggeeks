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
    <div className=' revamp '>
      <div className='text-5xl'>Sponser</div>
      <div className='py-10 '>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className='p-3'>
            <Image src={anaitik} width={350} height={200} alt="anaitik" />
          </div>
          <div className='p-3'>
            <Image src={badelog} width={350} height={200} alt='badelog' />
          </div>
          <div className='p-3'>
            <Image src={gfg} width={350} height={200} />
          </div>
          <div className='p-3'>
            <Image src={give} width={350} height={200} />
          </div>
          <div className='p-3'>
            <Image src={travel} width={350} height={200} />
          </div>
          <div className='p-3'>
            <Image src={youth} width={350} height={200} />
          </div>
        </div>
      </div>
      <div className='flex text-center pt-5 justify-center'>
        <h1 className='md:text-2xl text-lg items-center my-2 '>Want to sponser us?</h1>
        <button className='rounded-2xl border md:text-2xl text-lg white-glassmorphism mx-3 px-2 py-1 hover:text-orange-500 hover:bg-white shadow-md  shadow-orange-500'> Contact us</button>
      </div>

    </div>
  )
}

export default Sponser