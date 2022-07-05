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

    axios
      .post(
        // 'https://sheet.best/api/sheets/fb4b2b5c-2de7-40b6-9b23-4bf6c7eec0d8',
        'https://event-website-backend.herokuapp.com/api/chess',
        data
      )
      .then((response) => {
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
      {/* <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link> */}
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl">Chess</h1>
      </div>
      <div className="para-1 text-left white-glassmorphism px-10 py-10">
        <div>
          <h5 className="text-3xl  text-left revamp pb-5 text-orange-400">
            DESCRIPTION
          </h5>
          <div className='text-left'>
            <li>Date: 13 July 2022</li>
            <li>Day: Wednesday</li>
            <li>Time: 09 PM Onwards</li>
            <li>Type: Arena</li>
            <li>
              Platform: <a href="http://lichess.org"><u>Lichess</u></a>
            </li>
            
            <li>Format: 2 minutes + 1 second Increment per move</li>
          </div>
        </div>
      </div>
      <div className="form-font px-10 py-3 md:px-40 md:py-10">
        <form name="Chess-Form" action="" method="POST" className="form-font grid  grid-cols-1 justify-center px-2 md:px-10" onSubmit={handleSubmit}>
          <label className="px-2 text-left text-[19px] kdam ">Name:</label>
          <input name="name" type="text" placeholder="Name" className="white-glassmorphism my-3 bg-transparent px-3 py-5" required={true} onChange={(e) => setName(e.target.value)} value={name} />
          <label className="px-2 text-left text-[19px] kdam">Phone Number:</label>
          <input 
          name="phone-number" 
          type="tel" 
          placeholder="Phone Number" 
          pattern='([0-9]){10}'
            minLength={10}
            maxLength={10}
            title="Enter a valid phone number" 
            className="white-glassmorphism my-3 bg-transparent px-3 py-5" 
            required={true} onChange={(e) => setPhone(e.target.value)} 
            value={phoneNumber} />
          <label className="px-2 text-left text-[19px] kdam">E-mail:</label>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5 font-nuito"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title='someone@example.com'
          />
          <label className="px-2 text-left text-[19px] kdam">Institute:</label>
          <input
            name="institute"
            type="text"
            placeholder="Institute"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
          <label className="px-2 text-left text-[19px] kdam">
            Discord Username:
          </label>
          <input
            name="discord"
            type="text"
            placeholder="Discord Username"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
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
