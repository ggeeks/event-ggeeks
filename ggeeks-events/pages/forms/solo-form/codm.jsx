import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Link from "next/link"
import Solo from '../../event/solo'
import axios from 'axios'

function Cod() {
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbzKJH9YBAuFkO2sVtu3COjCKzvdYNJdnkdbDZkyf0685BbI_-JLJzE8RSE8ElZKx6xv/exec'
  // const form = document.forms['CODM-Form']
  // form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, {
  //             method: 'POST',
  //             body: new FormData(form)
  //         })
  //         .then(response => alert("Registration Successfull"))
  //         .catch(error => console.error('Error!', error.message)) 
  // })

  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [discord, setDiscord] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name,email,phone,institute,discord);
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
      username: username
    }

    // axios.post("https://sheet.best/api/sheets/ae51993c-9064-408c-a5cd-99a8fd32441c", data).then(response=>{
    axios.post("https://event-website-backend.herokuapp.com/api/codmSolo", data).then(response => {
      // console.log(response);
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setUsername('');
      alert("YOU HAVE BEEN REGISTERED SUCCESSFULLY!");
    });


  }
  return (

    <div className='justify-center'>
      <Link href='../../event/solo' to={<Solo />} alt='solo'>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
      </Link>
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'>Call Of Duty Mobile</h1></div>
      <div className='text-left p-6 mx-12 para-1 white-glassmorphism'>
        <h5 className='text-center revamp md:text-2xl text-xl'>DESCRIPTION</h5>
        <div className='text-left'>
          <h6>ROUND 1</h6>
          <li>Date: TBA</li>
          <li>Day: Wednesday</li>
          <li>Time: TBA</li>
          <li>Map: Random</li>
          <li>Type: Multiplayer-Free for All</li>
          <br />
          <h6>ROUND 2</h6>
          <li>Date:TBA</li>
          <li>Day: Wednesday</li>
          <li>Time: After Round 1</li>
          <li>Map: Random</li>
          <li>Type: Multiplayer-Free for All</li>
        </div>
      </div>
      <div className='md:px-40 md:py-10 px-10 py-3'>
        <form name="CODM-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e) => setName(e.target.value)} value={name} />
          <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e) => setPhone(e.target.value)} value={phoneNumber} />
          <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e) => setEmail(e.target.value)} value={email} />
          <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e) => setInstitute(e.target.value)} value={institute} />
          <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e) => setDiscord(e.target.value)} value={discord} />
          <input name="username" type="text" placeholder='CODM Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e) => setUsername(e.target.value)} value={username} />
          <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
        </form>
      </div>

      <div className='para-1 text-left white-glassmorphism px-10 py-10'>
      <div  >
                            <h5 className='text-3xl  text-left revamp pb-5 text-orange-400'>DESCRIPTION</h5>
                            <div className='text-left'>
                                <h6 className=' text-emerald-200'>ROUND 1</h6>
                                <li>Date: TBA</li>
                                <li>Day: Wednesday</li>
                                <li>Time: TBA</li>
                                <li>Map: Random</li>
                                <li>Type: Multiplayer-Free for All</li>
                                <br/>
                                <h6 className='text-emerald-200'>ROUND 2</h6>
                                <li>Date:TBA</li>
                                <li>Day: Wednesday</li>
                                <li>Time: After Round 1</li>
                                <li>Map: Random</li>
                                <li>Type: Multiplayer-Free for All</li>
                            </div>
                        </div>
      </div>
    </div>
  )
}
export default Cod
