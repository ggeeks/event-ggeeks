
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import EventLogo from '../assets/eventlogo.jpg'
import Register from './Register'
import bg1 from '../assets/gaming-world-bg1.png'
import bg2 from '../assets/gaming-world-bg2.png'
import bg3 from '../assets/gaming-world-bg3.png'
import icon1 from '../assets/gaming-world1.png'
import icon2 from '../assets/gaming-world2.png'
import icon3 from '../assets/gaming-world3.png'
// width={350} height={700} objectFit='none' 

{/* <div class="relative w-40 h-40 rounded-full overflow-hidden">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="object-cover w-full h-full" />
  <div class="absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4">this is a text</div>
</div> */}

function About() {
  return (
    <div className=" ">
    <div className='grid grid-cols-3 '>
    <div className="relative rt-img1">
      <div className="px-10 card">
      <div className=' py-5'><Image className="absolute" src={icon1} alt=''/></div>
        <div className="py-10">
          <h1 className="text-center text-orange-500 leading-4 text-3xl py-2">Live stream</h1>
          <h1 className="text-sky-200 py-2">When unknown printer took type and scrambled it to make type specimen book centuries,</h1>
        </div>
      </div>
        
    </div>
    <div className="relative rt-img2">
      <div className="px-10 card">
      <div className=' py-5'><Image className="absolute" src={icon2} alt=''/></div>
        <div className="py-10 ">
          <h1 className="text-center text-orange-500 leading-4 text-3xl py-2">Live stream</h1>
          <h1 className="text-sky-200 py-2">When unknown printer took type and scrambled it to make type specimen book centuries,</h1>
        </div>
      </div>
        
    </div>
    <div className="relative rt-img3">
      <div className="px-10 card">
      <div className=' py-5'><Image className="absolute" src={icon3} alt=''/></div>
        <div className="py-10">
          <h1 className="text-center text-orange-500 leading-4 text-3xl py-2">Live stream</h1>
          <h1 className="text-sky-200 py-2">When unknown printer took type and scrambled it to make type specimen book centuries,</h1>
        </div>
      </div>
        
    </div>
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
