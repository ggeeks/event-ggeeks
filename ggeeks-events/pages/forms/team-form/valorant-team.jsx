import Link from 'next/link'
import React, {useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Teams from '../../event/team'
import axios from 'axios'

const ValorantTeam = () => {
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwwKlaS7okN4gugnht0UNTDEGrQyDp5KcFzqAL_Y_f8GxATXgCiM6GD8HeE8GaQYWLt/exec'
  // const form = document.forms['Valorant-Form']
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
  const [valoUsername, setValoUsername] = useState('');
  const [leaderUsername, setLeaderUsername] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(name,email,phone,institute,discord);
    const data ={
      Name:name,
      Email:email,
      Phone:phoneNumber,
      Institute:institute,
      Discord:discord,
      TeamLeader:teamLeader,
      ValoUsername:valoUsername,
      LeaderUsername:leaderUsername
    }

    axios.post("https://sheet.best/api/sheets/ff2e289f-731d-411d-bb48-c28b122a4297", data).then(response=>{
      // console.log(response);
      alert("YOUR TEAM HAVE BEEN REGISTERED SUCCESSFULLY!");
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setLeader('');
      setValoUsername('');
      setLeaderUsername('');
    });

    

  }

  return (
    <div className='justify-center'> 
      <Link href='../../event/team' to={<Teams/>} alt='teams'>
    <div className=' text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div><h1 className=' md:text-5xl text-2xl px-5 py-3'>Valorant</h1></div>
    <div className='md:px-40 md:py-10 px-10 py-3'>
    <form name="Valorant-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setName(e.target.value)} value={name}/>
        <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setPhone(e.target.value)} value={phoneNumber}/>
        <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e)=>setInstitute(e.target.value)} value={institute}/>
        <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e)=>setDiscord(e.target.value)} value={discord}/>
        <input name="valorant-username" type="text" placeholder='Valorant Username[with hash id]' className='white-glassmorphism bg-transparent px-3 my-3 py-3' required onChange={(e)=>setValoUsername(e.target.value)} value={valoUsername}/>
        <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-3' required onChange={(e)=>setLeader(e.target.value)} value={teamLeader}/>
        <input name="leader-username" type="text" placeholder='Team leader Username[with hash id]' className='white-glassmorphism bg-transparent px-3 my-3 py-3' required onChange={(e)=>setLeaderUsername(e.target.value)} value={leaderUsername}/>
        <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
      </form>
    </div>
  </div>
  )
}

export default ValorantTeam