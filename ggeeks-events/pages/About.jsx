import Link from 'next/link'
import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import Register from './Register'
function About() {
  return (
    <div className=' '>
      <div>
        <h1 className='md:text-[46px] text-[36px] md:my-20 revamp '>About Event</h1>
      </div>
      <div className='text-center md:text-2xl text-lg para-1 md:px-20 py-5 px-2'>
        {/* <p>
          We, students from different colleges, organize various Gaming Tournament for different Mobile/PC Games and technical event such as game development.
        </p>
        <p>
          It is managed by 30+ students from different IITs, NITs, Thapar University, Chitkara University and other prominent Colleges/Universities of India.
        </p>
        <p>
          We have a reach of 10,000+ people, which is a huge audience base to begin with.
        </p>
        <p>
          Our motive is that everyone enjoy whatever they do whether gaming or development
        </p> */}
        <p >
          Gamer days 2.0 is a successor of Gamer Days. This event is held every year. This is a week events in which every participant enjoy the games during this period of time.
          there are various games we played like BGMI(BattleGround mobile india), chess, ludo , etc.

        </p>
        <p>
          games can be played Individual and in team.
          For <Link href='/Register' to={<Register />} className='text-indigo-400'><span className='text-yellow-400'>registration</span></Link> click on the button above.
        </p>
      </div>
      {/*  */}
    </div>
  )
}

export default About