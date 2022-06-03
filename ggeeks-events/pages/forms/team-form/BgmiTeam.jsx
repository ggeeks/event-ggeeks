import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Teams from '../../event/Teams'

const BgmiTeam = () => {
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbzYJL2GMNCFXPmAVhwZ9Vh_rperXsqsmLrF3ZV_33LwbV4oHI8njGGSyBVXFTDJOi7FIA/exec'
  // const form = document.forms['BGMI-Form']
  // form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, {
  //             method: 'POST',
  //             body: new FormData(form)
  //         })
  //         .then(response => alert("Registration Successfull"))
  //         .catch(error => console.error('Error!', error.message)) 
  // })
  return (
    <div className='justify-center'> 
      <Link href='../../event/Teams' to={<Teams/>} alt='teams'>
    <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div><h1 className='md:text-5xl text-2xl px-5 py-3'> BGMI</h1></div>
    <div className=' md:px-40 md:py-10 px-10 py-3'>
      <form name="BGMI-Form"action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center '>
        <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
        <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' />
        <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
        <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' />
        <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' />
        <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-3' />
        <div><button type="submit" className='md:text-2xl text-lg border hover:text-orange-500justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
      </form>
    </div>
  </div>
  )
}

export default BgmiTeam