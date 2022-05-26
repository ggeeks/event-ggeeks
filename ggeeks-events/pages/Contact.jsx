import React from 'react'

function Contact() {
  return (
    <div className='justify-center'>
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'> Contact Us</h1></div>
      <div className='py-2'>
        <div>
        <form action="" method="get" className=' grid grid-cols-1 w-[55vw] md:px-10 px-2 justify-center '>
          <input type="text" placeholder='Name' className='white-glassmorphism bg-transparent my-2 px-3 py-4' />
          <input type="number" placeholder='Phone Number' className='white-glassmorphism bg-transparent my-2 px-3 py-2 ' />
          <input type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-2 px-3 py-2' />
          <input type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-2 px-3 py-2' />
          <input type="text" placeholder='Message' className='white-glassmorphism bg-transparent px-3 my-2 py-2' />
          <button type="submit" className='md:text-2xl text-lg border items-center rounded-xl my-2 px-3 py-4 eth-card w-28 text-center '>Send</button>
        </form>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
