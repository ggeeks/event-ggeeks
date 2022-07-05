import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function contact() {

  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [institute, setInstitute] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      message: message,
    }

    axios.post(
      // 'https://sheet.best/api/sheets/fb4b2b5c-2de7-40b6-9b23-4bf6c7eec0d8',
      'https://event-website-backend.herokuapp.com/api/contact', data).then((response) => {
        setName('')
        setEmail('')
        setInstitute('')
        setMessage('')
        setPhone('')
        alert('THANK YOU FOR YOUR FEEDBACK!')
      })
  }


  return (
    <div className='justify-center'>
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'> Contact Us</h1></div>
      <div className='py-2'>
        <div>
          <form action="" method="POST" className='para-1 grid grid-cols-1  md:px-10 px-2 justify-center ' onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' className='white-glassmorphism bg-transparent my-3 px-3 py-3' required onChange={(e) => setName(e.target.value)} value={name} />
            <input type="tel" placeholder='Phone Number' className='white-glassmorphism bg-transparent my-3 px-3 py-3 '  pattern='([0-9]){10}'
            minLength={10}
            maxLength={10}
            title="Enter a valid phone number" required onChange={(e) => setPhone(e.target.value)} value={phoneNumber} />
            <input type="email" placeholder='E-mail' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title='someone@example.com' className='white-glassmorphism bg-transparent my-3 px-3 py-3' required onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-3' required onChange={(e) => setInstitute(e.target.value)} value={institute} />
            <textarea type="text" placeholder='Message' className='white-glassmorphism bg-transparent px-3 my-3 py-3' required onChange={(e) => setMessage(e.target.value)} value={message} />
            <div><button type="submit" className='md:text-2xl text-lg border items-center rounded-xl my-3 px-3 py-4 blue-glassmorphism hover:text-orange-500 md:w-40 w-20 text-center '>Send</button></div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default contact
