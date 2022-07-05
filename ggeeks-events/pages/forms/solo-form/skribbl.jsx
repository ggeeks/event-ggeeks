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
      {/* <Link href="../../event/solo" to={<Solo />} alt="solo">
        <div className="flex flex-row text-left">
          <IoIosArrowBack className="m-1 items-center text-xl" />
          <button className=" text-xl">Back</button>
        </div>
      </Link> */}
      <div>
        <h1 className="px-5 py-3 text-2xl md:text-5xl"> Skribbl</h1>
      </div>
      <div className="para-1 text-left white-glassmorphism px-10 py-10">
        <div>
          <h5 className="text-3xl  text-left revamp pb-5 text-orange-400">
            DESCRIPTION
          </h5>
          <div className='text-left'>
            <li>Date: 15 July 2022</li>
            <li>Day: Friday</li>
            <li>Time: 09 PM Onwards</li>
            <li>
              Platform: <a href="https://skribbl-ggeeks.herokuapp.com/"><u>Skribbl(ggeeks)</u></a>
            </li>
            
          </div>
        </div>
      </div>
      <div className="px-10 py-3 md:px-40 md:py-10">
        <form
          name="Skribbl-Form"
          action=""
          method="POST"
          className="form-font grid  grid-cols-1 justify-center px-2 md:px-10"
          onSubmit={handleSubmit}
        >
          <lable className="text-[19px] kdam text-left px-2">Name:</lable>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <lable className="text-[19px] kdam text-left px-2">Phone Number:</lable>
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
          <lable className="text-[19px] kdam text-left px-2">Email:</lable>
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
          <lable className="text-[19px] kdam text-left px-2">Institute:</lable>
          <input
            name="institute"
            type="text"
            placeholder="Institute"
            className="white-glassmorphism my-3 bg-transparent px-3 py-5"
            required={true}
            onChange={(e) => setInstitute(e.target.value)}
            value={institute}
          />
          <lable className="text-[19px] kdam text-left px-2">Discord Username:</lable>
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
export default Skribble
