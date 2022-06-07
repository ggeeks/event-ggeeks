import Link from 'next/link'
import React, {useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Teams from '../../event/Teams'
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

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(name,email,phone,institute,discord);
    const data ={
      Name:name,
      Email:email,
      Phone:phoneNumber,
      Institute:institute,
      Discord:discord,
      TeamLeader:teamLeader
    }

    axios.post("https://sheet.best/api/sheets/fa84e59b-05d9-49c9-9c82-e370efab3ef4", data).then(response=>{
      // console.log(response);
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setLeader('');
    })
  }

  return (
    <div className='justify-center'> 
      <Link href='../../event/Teams' to={<Teams/>} alt='teams'>
    <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div><h1 className='md:text-5xl text-2xl px-5 py-3'> BGMI</h1></div>
    <div className=' md:px-40 md:py-10 px-10 py-3'>
    <form name="BGMI(team)-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setName(e.target.value)} value={name}/>
        <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setPhone(e.target.value)} value={phoneNumber}/>
        <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e)=>setInstitute(e.target.value)} value={institute}/>
        <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e)=>setDiscord(e.target.value)} value={discord}/>
        <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-3' required onChange={(e)=>setLeader(e.target.value)} value={teamLeader}/>
        <button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button>
      </form>
    </div>
  </div>
  )
}

{/* <input name="team-leader" type="text" placeholder='Team Leader(In Game Name)' className='white-glassmorphism bg-transparent px-3 my-3 py-3' /> */}
export default BgmiTeam