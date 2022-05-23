import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Teams from '../../event/Teams'

const ValorantTeam = () => {
  return (
    <div className='justify-center'> 
      <Link href='../../event/Teams' to={<Teams/>} alt='teams'>
    <div className=' text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div><h1 className=' md:text-5xl text-2xl px-5 py-3'>Valorant</h1></div>
    <div className='py-2'>
      <form action="" method="get" className='grid grid-cols-1  md:px-10 px-2 justify-center  '>
        <input type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
        <input type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
        <input type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
        <input type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
        <input type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' />
        <input type="text" placeholder='Valorant Username[with hash id]' className='white-glassmorphism bg-transparent px-3 my-3 py-5' />
        <button type="submit" className='md:text-2xl text-l blue-glassmorphism hover:text-orange-500 w-1/5 justify-center rounded-xl my-3 px-3 py-4   ' >Register</button>
      </form>
    </div>
  </div>
  )
}

export default ValorantTeam