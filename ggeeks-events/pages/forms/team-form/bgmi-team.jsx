import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Teams from '../../event/team'
import axios from 'axios'

const BgmiTeam = () => {
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbzYJL2GMNCFXPmAVhwZ9Vh_rperXsqsmLrF3ZV_33LwbV4oHI8njGGSyBVXFTDJOi7FIA/exec'
  // const form = document.forms['BGMI-Form']
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
  const [teamLeader, setLeader] = useState('');
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
      username: username,
      teamLeader: teamLeader
    }

    // axios.post("https://sheet.best/api/sheets/fa84e59b-05d9-49c9-9c82-e370efab3ef4", data).then(response=>{
    axios.post("https://event-website-backend.herokuapp.com/api/bgmiTeam", data).then(response => {
      // console.log(response);
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setUsername('');
      setLeader('');
      alert("YOUR TEAM HAVE BEEN REGISTERED SUCCESSFULLY!");
    });


  }

  return (
    <div className='justify-center'>
      {/* <Link href='../../event/team' to={<Teams/>} alt='teams'>
    <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link> */}

      <div><h1 className='md:text-5xl text-2xl px-5 py-3'>BattleGround Mobile India</h1></div>

      <div className="text-left para-1 white-glassmorphism px-10 py-10">
        <h1 className='text-3xl  text-left revamp pb-5 text-orange-400'>DESCRIPTION</h1>
        <div >
          <h6 className=' text-emerald-200'>ROUND 1</h6>
          <li>Date- 18 July 2022</li>
          <li>Day: Monday</li>
          <li>Time- 9 p.m. onwards</li>
          <li>Map - Erangle</li>
          <br />
          <h6 className=' text-emerald-200'>ROUND 2</h6>
          <li>Date- 18 July 2022</li>
          <li>Day: Monday</li>
          <li>Time- 10 p.m. onwards</li>
          <li>Eligibility: Top 2 Teams of Round 1</li>
          <li>Map - Team Deathmatch</li>
          <br />
          <p>Kindly keep your game updated before the match day.</p>
          <br />
          <h6><b>INSTRUCTIONS FOR FILLING THIS FORM</b></h6>
          <p>Everyone has to fill this Form.</p>
          <p>Team Leader should be Unique for a SQUAD/TRIO/DUO, This will be used for pairing you with your Team.</p>
        </div>
      </div>
      <div className=' md:px-40 md:py-10 px-10 py-3'>
        <form name="BGMI(team)-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
          <lable className="text-[19px] kdam text-left px-2">Name:</lable>
          <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required={true} onChange={(e) => setName(e.target.value)} value={name} />
          <lable className="text-[19px] kdam text-left px-2">Phone Number:</lable>
          <input name="phone-number" type="tel" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' pattern='([0-9]){10}'
            minLength={10}
            maxLength={10}
            title="Enter a valid phone number" required={true} onChange={(e) => setPhone(e.target.value)} value={phoneNumber} />
          <lable className="text-[19px] kdam text-left px-2">Email:</lable>
          <input name="email" type="email" placeholder='E-mail' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title='someone@example.com' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required={true} onChange={(e) => setEmail(e.target.value)} value={email} />
          <lable className="text-[19px] kdam text-left px-2">Institute:</lable>
          <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required={true} onChange={(e) => setInstitute(e.target.value)} value={institute} />
          <lable className="text-[19px] kdam text-left px-2">Discord Username:</lable>
          <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required={true} onChange={(e) => setDiscord(e.target.value)} value={discord} />
          <lable className="text-[19px] kdam text-left px-2">BGMI Username:</lable>
          <input name="username" type="text" placeholder='BGMI Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required={true} onChange={(e) => setUsername(e.target.value)} value={username} />
          <lable className="text-[19px] kdam text-left px-2">Team Leader(In Game Name):</lable>
          <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required={true} onChange={(e) => setLeader(e.target.value)} value={teamLeader} />
          <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
        </form>
      </div>
    </div>
  )
}

{/* <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-3' /> */ }
export default BgmiTeam