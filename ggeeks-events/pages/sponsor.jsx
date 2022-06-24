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
      <div className='text-5xl'>Sponsors</div>
      <div className='py-10 '>
        <div className="grid md:grid-cols-3 grid-cols-1 w-5/6 md:mx-24 mx-12">
          <div className='p-3 '>
            <Image src={anaitik} width={250} height={150} alt="Anaitik" />
          </div>
          <div className='p-3'>
            <Image src={badelog} width={250} height={150} alt='Badelog' />
          </div>
          {/* <div className='p-3'>
            <Image src={gfg} width={350} height={200} />
          </div> */}
          <div className='p-3'>
            <Image src={give} width={250} height={150} alt='Give My Certificate'/>
          </div>
          {/* <div className='p-3'>
            <Image src={travel} width={350} height={200} />
          </div>
          <div className='p-3'>
            <Image src={youth} width={350} height={200} />
          </div> */}
        </div>
      </div>
      <div className=' text-center pt-5 justify-center'>
        <h1 className='md:text-2xl text-lg items-center my-2 '>Want to sponsor us?</h1>
        <a href="mailto:ggeeks.platform@gmail.com"><button className='rounded-2xl border md:text-2xl transition-300 text-lg white-glassmorphism mx-3 px-2 py-1 hover:text-orange-500 hover:bg-white shadow-md  shadow-orange-500'>Contact us</button></a>
      </div>

    </div>
  )
}

export default Sponser