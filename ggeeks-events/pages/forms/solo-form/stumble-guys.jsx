import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Solo from '../../event/solo'
import axios from 'axios'
import { Form } from 'react-bootstrap'
function AmongUs() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [institute, setInstitute] = useState('')
  const [discord, setDiscord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name,email,phoneNumber,institute,discord);
    const data = {
      name  : name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
    }
    axios
      .post(
        // 'https://sheet.best/api/sheets/fb4b2b5c-2de7-40b6-9b23-4bf6c7eec0d8',
        // 'https://script.google.com/macros/s/AKfycbxdM4v_gkgI_O0vt-qVEO4jfDnCOd8PH5sKfTvMIMb3cm1Oe_II2Rj_WTBxu7dzO4r9/exec',
        'https://event-website-backend.herokuapp.com/api/stumbleGuys',
        data
      )
      .then((response) => {
        // console.log(response);
        setName('')
        setEmail('')
        setInstitute('')
        setDiscord('')
        setPhone('')
        alert('YOU HAVE BEEN REGISTERED SUCCESSFULLY!')
      })
  }

  return (
    // Among Us
    <div className="justify-center">
      <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link>
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl">Stumble Guys</h1>
      </div>
      <div className="form-font px-10 py-3 md:px-40 md:py-10">
        <form
          name="StumbleGuys-Form"
          action=""
          method="POST"
          className="form-font grid  grid-cols-1 justify-center px-2 md:px-10"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            name="phone-number"
            type="number"
            placeholder="Phone Number"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phoneNumber}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5 font-nuito"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            name="institute"
            type="text"
            placeholder="Institute"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
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
export default AmongUs
