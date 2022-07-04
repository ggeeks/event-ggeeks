import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import individual from '../assets/reg/individual.png'
import team from "../assets/reg/team.png"
// import Router from 'next/router'
import Solo from './event/solo.jsx'
import Teams from "./event/team.jsx"

function Register() {

  return (
    <div className='revamp' >
      <div><h1 className='md:text-5xl text-2xl'>Register</h1></div>
      <div className='flex md:flex-row flex-col justify-evenly'>
        <div className='justify-center'>
          <h1 className='md:text-3xl text-lg px-5 py-3'>
            SOLO
          </h1>

          <Link to={<Solo />} href='./event/solo' className='cursor-pointer'>
            <div className='flex flex-col cursor-pointer py-3 px-1'>
              <Image src={individual} width={300} height={300} alt="solo" className='' />
              <button className='md:text-2xl  hover:text-orange-500 hover:bg-white  lg:text-3xl text-lg px-3 py-1 rounded-2xl my-2 border '>Register solo</button>
            </div>
          </Link>

        </div>
        <div className=' justify-center'>
          <h1 className='md:text-3xl text-lg   px-5 py-3 '>
            Team
          </h1>
          <Link to={<Teams />} href='./event/team' className='cursor-pointer'>
            <div className='flex flex-col cursor-pointer py-3 px-1'>
              <Image src={team} width={300} height={300} alt="solo" className='' />
              <button className='md:text-2xl sm:text-xs lg:text-3xl   hover:text-orange-500 hover:bg-white  text-lg px-3 py-1 rounded-2xl my-2 border '>register team</button>
            </div>
          </Link>
        </div>

      </div>
      <div className=''>
        <h1 className='text-xl md:text-3xl py-10 text-orange-400'>Terms & condition </h1>
        <div className='justify-start text-left para-1 px-20 white-glassmorphism'>
          <ul className='px-10 py-5'>
            <li className='text-xl py-3'>
              <strong className='text-orange-400'>GENERAL</strong>
            </li>
            <ul className=' px-6 text-lg '>
              <li>Must Subscribe/Follow/Join us on all our Social Platforms.</li>
              <li>No network issues will be Entertained.</li>
              <li>If anyone finds out another player Cheating or Violating any rule, You have to report to us with Adequate Proof.</li>
              <li>Gaming Geeks’ Decisions in Any/All Situations is Final and Binding.</li>
            </ul>
            <li className='text-xl py-3'>
              <strong className='text-orange-400'>DISQUALIFICATION</strong>
              <ul className='px-6 text-lg '>
                <li>Use of any unfair means during or before the game.</li>
                <li>Usage of any kind of FOUL language in the chat box.</li>
              </ul>
            </li>
            {/* <li className='text-xl py-3 '><strong className ='text-orange-500'>CHESS</strong>
              <ul className='px-6 text-lg '>
                <li>Winning Criteria: Winner from Leaderboard</li>
              </ul>
            </li>
            <li className='text-xl py-3'><strong className ='text-orange-500'>CODM</strong>
              <ul className='px-6 text-lg '>
                <li>Winning Criteria: Winner of Round 2</li>
                <li>Eligibility Criteria for Round 2: Top Player of Every Match will go in Round 2</li>
              </ul>
            </li>
            <li className='text-xl py-3'><strong className ='text-orange-500'>SKRIBBL</strong>
              <ul className='px-6 text-lg '>
                <li>Winning Criteria: Winner of Round 2</li>
                <li>Eligibility Criteria for Round 2: Top Player of Every Match will go in Round 2</li>
              </ul>
            </li>
            <li className='text-xl py-3'><strong className ='text-orange-500'>BGMI</strong>
              <ul className='px-6 text-lg '>
                <li>Winning Criteria: Chicken Dinner Player of Round 2</li>
                <li>Eligibility Criteria for Round 2: Top 2 Squads of Every Match will go in Round 2</li>
              </ul>
            </li> */}


          </ul>

        </div>
      </div>

    </div>
  )
}

export default Register
