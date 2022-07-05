// import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios'
// import { useForm } from "react-hook-form";

function AmongUs() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [institute, setInstitute] = useState('')
  const [discord, setDiscord] = useState('')

  const validateName = (name) => {
    if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
    if (name.length > 20) {
      return 'Name must be less than 20 characters long';
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
      return 'Name must be alphabetic';
    }
    return '';
  }
  const validatePhone = (phoneNumber) => {
    if (phoneNumber.length < 10) {
      return 'Phone Number must be at least 10 characters long';
    }
    if (phoneNumber.length > 10) {
      return 'Phone Number must be less than 10 characters long';
    }
    if (!/^[0-9]+$/.test(phoneNumber)) {
      return 'Phone Number must be numeric';
    }
    return '';
  }
  const validateEmail = (email) => {
    if (email.length < 3) {
      return 'Email must be at least 3 characters long';
    }
    if (email.length > 20) {
      return 'Email must be less than 20 characters long';
    }
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return 'Email must be valid';
    }
    return '';
  }
  const validateInstitute = (institute) => {
    if (institute.length < 3) {
      return 'Institute must be at least 3 characters long';
    }
    if (institute.length > 20) {
      return 'Institute must be less than 20 characters long';
    }
    if (!/^[a-zA-Z]+$/.test(institute)) {
      return 'Institute must be alphabetic';
    }
    return '';
  }
  const validateDiscord = (discord) => {
    if (discord.length < 3) {
      return 'Discord Username must be at least 3 characters long';
    }
    if (discord.length > 20) {
      return 'Discord Username must be less than 20 characters long';
    }
    if (!/^[a-zA-Z0-9]+$/.test(discord)) {
      return 'Discord Username must be alphanumeric';
    }
    return '';
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name,email,phoneNumber,institute,discord);
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
      {/* <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link> */}
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl">Stumble Guys</h1>
      </div>
      <div className="para-1 text-left white-glassmorphism px-10 py-10">
        <div><h5 className="text-3xl  text-left revamp pb-5 text-orange-400">DESCRIPTION</h5></div>
        <div className='text-left'>
          {/* <li>ROUND 1</li> */}
          <li>Date- 14 july 2022 </li>
          <li>Day- Thursday</li>
          <li>Time - 09 PM Onwards</li>
          {/* <li>Total players in a round - 32</li> */}
        </div>
      </div>
      <div className="form-font px-10 py-3 md:px-40 md:py-10">
        <form
          name="StumbleGuys-Form"
          action=""
          method="POST"
          className="form-font grid  grid-cols-1 justify-center px-2 md:px-10"
          onSubmit={handleSubmit}
        >
          <label className="text-[19px] kdam text-left px-2" >Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            // validateName={validateName(name)}
            onChange={(e) => setName(e.target.value)}
            value={name}

          />
          <label className="text-[19px] kdam text-left px-2" >Phone Number</label>
          <input
            name="phone-number"
            type="tel"
            placeholder="Phone Number"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            onChange={(e) => setPhone(e.target.value)}
            value={phoneNumber}
            pattern='([0-9]){10}'
            minLength={10}
            maxLength={10}
            title="Enter a valid phone number"

          />
          <label className="text-[19px] kdam text-left px-2" >Email</label>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5 font-nuito"
            required={true}
            rule={validateEmail(email)}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title='someone@example.com'
          />
          <label className="text-[19px] kdam text-left px-2" >Institute:</label>
          <input
            name="institute"
            type="text"
            placeholder="Institute"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
          <label className="text-[19px] text-left px-2" >Discord:</label>
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
export default AmongUs
