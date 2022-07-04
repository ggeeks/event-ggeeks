import React from 'react'

function contact() {
  return (
    <div className='justify-center'>
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'> Contact Us</h1></div>
      <div className='py-2'>
        <div>
        <form action="" method="POST" className=' grid grid-cols-1  md:px-10 px-2 justify-center '>
          <input type="text" placeholder='Name' className='white-glassmorphism bg-transparent my-3 px-3 py-3' />
          <input type="number" placeholder='Phone Number' className='white-glassmorphism bg-transparent my-3 px-3 py-3 ' />
          <input type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-3' />
          <input type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-3' />
          <textarea type="text" placeholder='Message' className='white-glassmorphism bg-transparent px-3 my-3 py-3' />
          <div><button type="submit" className='md:text-2xl text-lg border items-center rounded-xl my-3 px-3 py-4 blue-glassmorphism hover:text-orange-500 md:w-40 w-20 text-center '>Send</button></div>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default contact
