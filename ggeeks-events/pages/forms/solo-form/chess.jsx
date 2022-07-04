import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Solo from '../../event/solo'
import axios from 'axios'
import { Form } from 'react-bootstrap'
function Chess() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [institute, setInstitute] = useState('')
  const [discord, setDiscord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
    }

    axios.post(
      // 'https://sheet.best/api/sheets/fb4b2b5c-2de7-40b6-9b23-4bf6c7eec0d8',
      'https://event-website-backend.herokuapp.com/api/chess', data).then((response) => {
        setName('')
        setEmail('')
        setInstitute('')
        setDiscord('')
        setPhone('')
        alert('YOU HAVE BEEN REGISTERED SUCCESSFULLY!')
      })
  }
  return (
    <div className="justify-center">
      <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link>
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl">Chess</h1>
      </div>
      <div className='text-left p-6 mx-12 para-1 white-glassmorphism'>
        <div >
          <h5 className='text-center revamp md:text-2xl text-xl'>DESCRIPTION</h5>
          <div >
            <li>Date: 13 July 2022</li>
            <li>Day: Monday</li>
            <li>Type: Arena</li>
            <li>Platform: <a href="http://lichess.org">Lichess</a></li>
            <li>Time: 09 PM Onwards</li>
            <li>Format: 2 minutes + 1 second Increment per move</li>
          </div>
        </div>
      </div>
      <div className="form-font px-10 py-3 md:px-40 md:py-10">
        <form
          name="Chess-Form"
          action=""
          method="POST"
          className="form-font grid  grid-cols-1 justify-center px-2 md:px-10"
          onSubmit={handleSubmit}
        >
        <label className="text-[21px] text-left px-2" >Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label className="text-[21px] text-left px-2" >Phone Number:</label>
          <input
            name="phone-number"
            type="number"
            placeholder="Phone Number"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phoneNumber}
          />
          <label className="text-[21px] text-left px-2" >E-mail:</label>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5 font-nuito"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="text-[21px] text-left px-2" >Institute:</label>
          <input
            name="institute"
            type="text"
            placeholder="Institute"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
          <label className="text-[21px] text-left px-2" >Discord Username:</label>
          <input
            name="discord"
            type="text"
            placeholder="Discord Username"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setDiscord(e.target.value)}
            value={discord}
          />
          <div>
            <button
              type="submit"
              className="blue-glassmorphism my-3 w-3/5 justify-center rounded-xl px-3 py-4 text-lg hover:text-orange-500 md:w-2/5 md:text-2xl"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      
    </div>
  )
}
export default Chess
