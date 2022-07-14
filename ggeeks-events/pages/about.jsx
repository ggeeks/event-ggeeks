import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import EventLogo from '../assets/eventlogo.jpg'
import Register from './register'
import Card from '../components/Card'
import Prize from './prize'
function about() {
  return (

    <div className="">
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 ">

        <div className="rt-img1 px-2 relative ">

          <div className="md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="  absolute" src={icon1} alt="" />
            </div>

            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Live stream
              </h1>
              <h1 className=" text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>

        </div>

        <div className="rt-img2 px-2 relative">

          <div className=" md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="absolute" src={icon2} alt="" />
            </div>
            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Gaming
              </h1>
              <h1 className="text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>
        </div>
        <div className="rt-img3 px-2 relative">

          <div className="md:px-10 lg:pt-11 lg:pb-4 md:py-10 xl:py-36 py-10 mx-0">

            <div className="pb-10 pt-0 mt-4 lg:mt-0">
              <Image className="absolute" src={icon3} alt="" />
            </div>
            
            <div className="md:py-10 px-10 lg:py-0 lg:px-0 py-10">
              <h1 className="text-center md:text-2xl leading-4  text-xl text-orange-500">
                Tournaments
              </h1>
              <h1 className="text-sky-200 text-[18px] md:px-20 md:text-md lg:px-0">
                When unknown printer took type and scrambled it to make type
                specimen book centuries,
              </h1>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Card /> */}
      <div>
        <h1 className="revamp text-[36px] md:my-20 md:text-[46px] ">
          About Event
          <span className="flex justify-center text-2xl ">
            Know about Gamer days
          </span>
          <div className="eth-card mx-[24vw] h-2 w-[40vw] justify-center px-20" />
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-evenly xl:grid-cols-2 ">
        <div className="kdam py-5 px-2 text-justify text-lg md:px-20 md:text-2xl">
          <p className="py-8 para-1">
            Gamer Days 2.0 is a Week Long Gaming Event. It is a successor of Gamer Days Event held in November 2021. This event is your chance to compete with Pro players. On top of that, this event also gives you a chance to win incredible prizes.
          </p>
        </div>
        <div className="px-10 py-3 transition-transform">
          <Image
            src={EventLogo}
            className=" rounded-3xl   hover:ease-in-out "
            alt=""
            width={500} height={350}
          />
        </div>
      </div>

      <div>
        <h1 className="revamp text-[36px] md:my-20 my-10 md:text-[46px] ">
          Schedule
        </h1>
        <div className='justify-center text-center xl:pl-[21vw] pl-[10vw] items-center '>
          <table className='blue-glassmorphism  text-center justify-center para-1 text-2xl'>
            <tr className='  '>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Days</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10  text-left'>Game Name</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Date</th>
            </tr>
         
            <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 1</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>Chess</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>13 July, 2022</th>

            </tr> <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 2</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>Stumble Guys</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>14 July, 2022</th>

            </tr> <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 3</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>Skribbl</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>15 July, 2022</th>

            </tr>
            <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 4</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>CODM</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>16 July, 2022</th>

            </tr>
            <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 5</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'> Valorant</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>17 July, 2022</th>

            </tr>
            <tr>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2'>Day 6</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>BGMI</th>
              <th className='md:text-2xl text-[18px] md:py-3 py-1 md:px-10 px-2 text-left'>18 July, 2022</th>

            </tr>

          </table>
        </div>
<div>
  <Prize />
</div>
      </div>

    </div>
  )
}

export default about
