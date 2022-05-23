
import Head from 'next/head'
import Image from 'next/image'
import About from './About'
import Games from './Games'
import Gallery from './Gallery'
import Sponser from './Sponser'
import Contact from './Contact'
import Register from './Register'
import Link from "next/link"
function Home() {
  return (
    <div className=" animate1 py-2">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,700;0,800;0,900;1,700&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <title>GamingGeeks Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-[50px] revamp'>
        <h1 className='md:text-[89px] text-7xl '>Gamer Days 2.0</h1>
        <h1 className='md:text-[40px] text-3xl py-5 '>Date Announce soon </h1>
        <Link href='./Register' to={<Register />}>
          <button className='md:text-2xl text-lg border md:px-4 white-glassmorphism animate-bounce md:py-6 px-2 py-4 my-9  rounded-lg '>Register</button>
        </Link>
      </main>
      <About />
      {/* <Games/> */}
      {/* <Gallery/> */}
      <Sponser />
      {/* <Contact/> */}
      {/* <Register/> */}

    </div>
  )
}

export default Home
