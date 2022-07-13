import Image from 'next/image'
import React from 'react'
import anaitik from '../assets/brand/anaitik.png'
import give from "../assets/brand/give-my-certificate.png"
import hover from "../assets/brand/hover-robotix.png"
import interview from '../assets/brand/interview-buddy.png'
import mentor from '../assets/brand/mentor-x.png'
import revUP from '../assets/brand/rev-up.png' 
// import hackClub from '../assets/brand/hack-club.png' 
import code8 from '../assets/brand/code8.png'
import gfg from '../assets/brand/gfg.png'


function Sponser() {
  return (
    <div className=' revamp '>
      <div className='text-5xl'>Sponsors</div>
      <div className='py-10 '>
        <div className="grid md:grid-cols-3 grid-cols-1 w-5/6 md:mx-24 mx-12">
          <div className='p-3 '>
            <Image src={anaitik} width={250} height={150} alt="Anaitik" />
          </div>
          <div className='p-3 '>
            <Image src={code8} width={250} height={150} alt="code8" />
          </div>
          <div className='p-3'>
            <Image src={interview} width={250} height={150} alt="Interview Buddy"/>
          </div>
          <div className='p-3'>
            <Image src={hover} width={250} height={150} alt='Hover Robotix' />
          </div>
          <div className='p-3'>
            <Image src={mentor} width={250} height={150} alt="MentorX"/>
          </div>
          <div className='p-3'>
            <Image src={revUP} width={250} height={150} alt="RevUp"/>
          </div>
          {/* <div className='p-3'>
            <Image src={gfg} width={250} height={150} alt="Geeks for Geeks"/>
          </div>
          <div className='px-3'>
            <Image src={give} width={250} height={150} alt='Give My Certificate'/>
          </div> */}
        </div>
      </div>
      {/* <div className='py-5 text-3xl'>Title Sponsor</div> */}
      <div className='p-3 flex '>
        <div className="grid md:grid-cols-2 grid-cols-1 w-5/6 md:mx-24 mx-12">
          <div className='p-3'>
            <Image src={gfg} width={320} height={150} alt="Geeks for Geeks"/>
          </div>
          <div className='p-3'>
            <Image src={give} width={290} height={150} alt='Give My Certificate'/>
          </div>
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