import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Solo from '../../event/solo'
import axios from 'axios'

function Bgmi() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [discord, setDiscord] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
      username: username
    }

    // axios.post("https://sheet.best/api/sheets/648b0e88-3e07-4c47-81e2-02de9e7e07e4", data).then(response=>{
    axios.post("https://event-website-backend.herokuapp.com/api/bgmiSolo", data).then(response => {
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
      {/* <Link href='../../event/solo' to={<Solo />} alt='solo'>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
      </Link> */}
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'>BattleGrounds Mobile India</h1></div>
      <div className="text-left para-1 white-glassmorphism px-10 py-10">
        <h1 className='text-3xl  text-left revamp pb-5 text-orange-400'>DESCRIPTION</h1>
        <div >
          <h6 className=' text-emerald-200'>ROUND 1</h6>
          <li>Date- 18 July 2022</li>
          <li>Day: Monday</li>
          <li>Time- 9 p.m. onwards</li>
          <li>Map - Erangle</li>
          <br/>
            <h6 className=' text-emerald-200'>ROUND 2</h6>
          <li>Date- 18 July 2022</li>
          <li>Day: Monday</li>
          <li>Time- 10 p.m. onwards</li>
          <li>Eligibility: Top 2 Teams of Round 1</li>
          <li>Map - Team Deathmatch</li>
            <br/>
            <p>Kindly keep your game updated before the match day.</p>
            </div>
        </div>
      <div className='md:px-40 md:py-10 px-10 py-3'>
        <form name="BGMI-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
          <label className="text-[19px] kdam text-left px-2" >Name:</label>
          <input 
          name="name" 
          type="text" 
          placeholder='Name' 
          className='white-glassmorphism my-3 bg-transparent px-3 py-5' 
          required={true} 
          onChange={(e) => setName(e.target.value)} 
          value={name}
           />
          <label className="text-[19px] kdam text-left px-2" >Phone Number:</label>
          <input 
          name="phone-number" 
          type="tel" 
          placeholder='Phone Number' 
          className='white-glassmorphism my-3 bg-transparent px-3 py-5' 
          onChange={(e) => setPhone(e.target.value)} 
          value={phoneNumber} 
          required={true}
          pattern='([0-9]){10}'
          minLength={10}
          maxLength={10}
          title="Enter a valid phone number"
          />
          <label className="text-[19px] kdam text-left px-2" >E-mail:</label>
          <input 
          name="email" 
          type="email" 
          placeholder='E-mail' 
          className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' 
          required={true} onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title='someone@example.com'
          />
          <label className="text-[19px] kdam text-left px-2" >Institute:</label>
          <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required={true} onChange={(e) => setInstitute(e.target.value)} value={institute} />
          <label className="text-[19px] kdam text-left px-2" >Discord Username:</label>
          <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required={true} onChange={(e) => setDiscord(e.target.value)} value={discord} />
          <label className="text-[19px] kdam text-left px-2" >BGMI Username:</label>
          <input name="username" type="text" placeholder='BGMI Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required={true} onChange={(e) => setUsername(e.target.value)} value={username} />
          <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
        </form>
      </div>
    </div>
  )
}

export default Bgmi