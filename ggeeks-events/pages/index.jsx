
import Head from 'next/head'
import Image from 'next/image'
import About from './About'
import Games from './Games'
import Gallery from './Gallery'
import Sponser from './Sponser'
import Contact from './Contact'
import Register from './Register'
import Link from "next/link"
function Home(){
  return (
    <div className=" animate1 py-2">
      <Head>
        <title>Ggeeks Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-[50px]'>
        <h1 className='md:text-[89px]  '>Gamer Days 2.0</h1>
        <h1 className='md:text-[40px]  '>Date Announce soon </h1>
        <Link href='./Register' to={<Register/>}>
        <button  className='md:text-2xl text-lg border px-2 py-3 my-9 text-orange-500 text-justify rounded-lg '>Register</button>
          </Link>        
      </main>
      <About/>
      {/* <Games/> */}
      {/* <Gallery/> */}
      <Sponser/>
      {/* <Contact/> */}
      {/* <Register/> */}
      
    </div>
  )
}

export default Home
