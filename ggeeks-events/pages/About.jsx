import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import EventLogo from '../assets/eventlogo.jpg'
import Register from './Register'
function About() {
  return (
    <div className=" ">
    <div className='grid grid-cols-3'>
    <div>section 1</div>
    <div> section 2</div>
    <div> section 3</div>

    </div>
      <div>
        <h1 className="revamp text-[36px] md:my-20 md:text-[46px] ">
          About Event
          <span className='flex justify-center text-2xl '>Know about Gamer days</span>
          <div className='h-2 w-[40vw] justify-center px-20 mx-[24vw] eth-card'/>
        </h1>
        
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly ">
        <div className="para-1 py-5 px-2 text-center text-lg md:px-20 md:text-2xl">
          <p>
            Gamer days 2.0 is a successor of Gamer Days. This event is held
            every year. This is a week events in which every participant enjoy
            the games during this period of time. there are various games we
            played like BGMI(BattleGround mobile india), chess, ludo , etc.
          </p>
          <p>
            games can be played Individual and in team. For{' '}
            <Link
              href="/Register"
              to={<Register />}
              className="text-indigo-400"
            >
              <span className="text-yellow-400">registration</span>
            </Link>{' '}
            click on the button above.
          </p>
        </div>
        <div className="transition-transform px-10 py-3 animate-pulse">
          <Image src={EventLogo} className=' hover:ease-in-out   rounded-3xl ' alt="" />
        </div>
      </div>

      {/*  */}
    </div>
  )
}

export default About
