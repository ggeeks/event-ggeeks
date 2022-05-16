import React from 'react'
import { AiFillCalendar } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
function About() {
  return (
    <div className='mt-10 '>
      <div>
        <h1 className='text-[46px] md:my-20 my-10'>About Us</h1>
      </div>
      <div className='text-justify text-2xl font-serif md:px-20 px-2'>
        <p>
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
        </p>
      </div>
      <div className='flex flex-col py-20 md:flex-row justify-evenly'>
        <div className='white-glassmorphism md:w-[50vw] items-center mx-5 my-7 text-start rounded-2xl px-5 py-3'>
          <div className='text-center justify-evenly justify-items-center'>
            <h1 className='text-center items-center md:mx-40 mx-20 py-2'>
              <AiFillCalendar className='text-blue-600 text-7xl ' />
            </h1>
          </div>

          <h1 className='text-2xl'>Amazing Events</h1>
          <h2 className='text-[18px]'>Monthly events ranging from E-Sports to Game Development.</h2>
        </div>
        <div className='white-glassmorphism items-center mx-5 my-7 text-center rounded-2xl px-5 py-3'>
          <div className='text-center justify-evenly justify-items-center'>
            <h1 className='text-center items-center md:mx-40 mx-20 py-2'>
              <FaYoutube className='text-red-800 text-7xl text-center items-center justify-between' />
            </h1>
          </div>
          <h1 className='text-2xl'>YouTube Upload</h1>
          <h2 className='text-[18px]'>Weekly Different Gameplays are uploaded on YouTube</h2>
        </div>
      </div>
    </div>
  )
}

export default About