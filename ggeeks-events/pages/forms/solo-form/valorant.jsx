import Link from 'next/link'
import React, {useState} from 'react'
import Solo from '../../event/solo'
import axios from 'axios'

import { IoIosArrowBack } from 'react-icons/io'
function Valorant (){
  // const scriptURL = 'https://script.google.com/macros/s/AKfycbyohD8VSOebTHco4Yw8nhMG_54pCWaAokpVV6_B1fYrGQ368XNXQ54cgumXlKLzoTA/exec'
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
  const [valoUsername, setValoUsername] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(name,email,phone,institute,discord);
    const data ={
      name:name,
      email:email,
      phoneNumber:phoneNumber,
      institute:institute,
      discord:discord,
      valoUsername:valoUsername
    }

    // axios.post("https://sheet.best/api/sheets/9c7bcb6a-fe66-40e7-8d7e-12ff93322a20", data).then(response=>{
    axios.post("https://event-website-backend.herokuapp.com/api/valorantSolo", data).then(response=>{
      // console.log(response);
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setValoUsername('');
      alert("YOU HAVE BEEN REGISTERED SUCCESSFULLY!");
    });

    
  }

return (
    <div className='justify-center'> 
    <Link href='../../event/solo' to={<Solo/>} alt='solo'>
    <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
    </Link>
    <div><h1 className='md:text-5xl text-2xl px-5 py-3'> Valorant</h1></div>
    <div className='md:px-40 md:py-10 px-10 py-3'>
    <form name="Valorant-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setName(e.target.value)} value={name}/>
        <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e)=>setPhone(e.target.value)} value={phoneNumber}/>
        <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e)=>setInstitute(e.target.value)} value={institute}/>
        <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e)=>setDiscord(e.target.value)} value={discord}/>
        <input name="valorant-username" type="text" placeholder='Valorant Username[with hash id]' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e)=>setValoUsername(e.target.value)} value={valoUsername}/>
        <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
      </form>
    </div>  
  </div>
)}
export default Valorant
