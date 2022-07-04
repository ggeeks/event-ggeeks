import Link from 'next/link'
import React, { useState } from 'react'
import Solo from '../../event/solo'
import { IoIosArrowBack } from 'react-icons/io'
import axios from 'axios'
function Skribble() {
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbx_KMJ_q8lZnSQI5U__NW424YrGL4MUF5C_8VwHP1Qob5GWmCu4I0A6HWdgay5EMA58BA/exec'
  // const form = document.forms['Skribbl-Form']
  // form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, {
  //             method: 'POST',
  //             body: new FormData(form)
  //         })
  //         .then(response => alert("Registration Successfull"))
  //         .catch(error => console.error('Error!', error.message))
  // })

  const [name, setName] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [institute, setInstitute] = useState('')
  const [discord, setDiscord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(name,email,phone,institute,discord);
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
    }

    // axios.post("https://sheet.best/api/sheets/14133b73-4937-4f87-843c-72cd1162b938", data).then(response=>{
    axios
      .post('https://event-website-backend.herokuapp.com/api/skribbl', data)
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
    <div className="justify-center">
      <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link>
      
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl"> Skribbl</h1>
      </div>
      <div className="px-10 py-3 md:px-40 md:py-10">
        <form
          name="Skribbl-Form"
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
      <div className="text-left para-1 white-glassmorphism px-10 py-10">
        <div>
          <h1 className='text-3xl  text-center revamp pb-5 text-orange-400'>DESCRIPTION</h1>
        </div>
        <ul>
          <li>
            Winning Criteria: Winner of Round 2
          </li>
          Eligibility Criteria for Round 2: Top Player of Every Match will go in Round 2
          <li></li>
        </ul>
      </div>
    </div>
  )
}
export default Skribble
