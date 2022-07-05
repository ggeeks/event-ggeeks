// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import individual from '../assets/reg/individual.png'
// import team from "../assets/reg/team.png"
// // import Router from 'next/router'
// import Solo from './event/solo.jsx'
// import Teams from "./event/team.jsx"


import React from 'react'
// import Register from '../register'
import BgmiTeam from '../pages/forms/team-form/bgmi-team'
import Link from 'next/link'
// import { IoIosArrowBack } from 'react-icons/io'
import stumbleGuys from '../assets/games/stumble-guys.png'
import bgmi from '../assets/games/bgmi.jpg'
import bgmiTeam from '../assets/games/bgmi-team.png'
import chess from '../assets/games/chess.png'
import cod from '../assets/games/cod.png'
import skribbleImage from '../assets/games/skribble.png'
import valorant from '../assets/games/valorant.png'
import transparent from '../assets/games/transparent.png'
import Image from 'next/image'
import StumbleGuys from './forms/solo-form/stumble-guys'
import BgmiSolo from './forms/solo-form/bgmi'
import ChessSolo from './forms/solo-form/chess'
import CODMSolo from './forms/solo-form/codm'
import SkribbleSolo from './forms/solo-form/skribbl'
import ValorantSolo from './forms/solo-form/valorant'

function Register() {

  return (
    <div className='revamp' >
      <div><h1 className='md:text-5xl text-2xl'>Register</h1></div>
      {/* <div className='flex md:flex-row flex-col justify-evenly'>
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

      </div> */}

      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <Link href="../forms/solo-form/chess" to={<ChessSolo />} alt="chess">
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={chess} height={970} alt="chess-image" />
              <h2 className="text-xl">Chess</h2>
              
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' onClick={()=>(<ChessSolo/>)}>Register</button>
            </div>
            
          </Link>
          
          <Link
            href="../forms/solo-form/stumble-guys"
            to={<StumbleGuys />}
            alt="stumble-guys"
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={stumbleGuys} height={1020} alt="stumble-guys" />
              <h2 className="text-xl">Stumble Guys</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500' onClick={()=>(<ChessSolo/>)}>Register</button>
            </div>
            
          </Link>
          <Link
            href="../forms/solo-form/skribbl"
            alt="skribble"
            to={<SkribbleSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
              <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={skribbleImage} height={850} alt="skribble-image" />
              <h2 className="text-xl">Skribbl</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
            
          </Link>
          <Link
            href="../forms/solo-form/codm"
            alt="codm-image"
            to={<CODMSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
            <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={cod} height={950} alt="cod" />
              <h2 className="text-xl">Call of Duty</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>
          
          <Link
            href="../forms/solo-form/valorant"
            alt="valorant"
            to={<ValorantSolo />}
          >
            <div className='m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12'>
            <div className=" blue-glassmorphism m-5 w-5/6 cursor-pointer rounded-2xl px-3 py-2 md:w-11/12">
              <Image
                src={valorant}
                height={680}
                classname="rounded-2xl"
                alt="valorant"
              />
              <h2 className="text-xl">Valorant</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>

          <Link href="../forms/solo-form/bgmi" to={<BgmiSolo />} alt="BGMI">
            <div className='m-5 w-5/6  px-3 py-2 md:w-11/12'>
            <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={bgmi} alt="bgmi" />
              <h2 className="text-xl">BGMI</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>
            <div className='m-5 w-5/6  px-3 py-2 md:w-11/12'>
            
           
            </div>
          {/* </Link>  */}
          <Link href="../forms/team-form/bgmi-team" to={<BgmiTeam />} alt="BGMI">
            <div className='m-5 w-5/6  px-3 py-2 md:w-11/12'>
            <div className="blue-glassmorphism m-5 w-5/6 cursor-pointer px-3 py-2 md:w-11/12">
              <Image src={bgmiTeam} alt="bgmi" />
              <h2 className="text-xl">BGMI-Team</h2>
            </div>
            <button className=' px-2 py-1  rounded-lg text-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 bg-gradient-to-r from-purple-500 to-pink-500'>Register</button>
            </div>
          </Link>          

        </div>
        {/* <div className=''> */}
          
        {/* </div> */}
        
      </div>

      <div className=''>
        <h1 className='text-xl md:text-3xl py-10 text-orange-400'>Terms & conditions </h1>
        <div className='justify-start text-left para-1 px-10 white-glassmorphism'>
          <ul className=' py-5'>
            <li className='text-xl py-3'>
              <strong className='text-orange-400'>GENERAL</strong>
            </li>
            <ul className=' px-6  text-lg '>
              <li>Must Subscribe /Follow/ Join us on all our Social Platforms.</li>
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
