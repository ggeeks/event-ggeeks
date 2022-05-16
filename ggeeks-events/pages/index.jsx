
import Head from 'next/head'
import Image from 'next/image'
import About from './About'
import Games from './Games'
import Gallery from './Gallery'
import Sponser from './Sponser'
import Contact from './Contact'
import Register from './Register'

function Home(){
  return (
    <div className=" animate py-2">
      <Head>
        <title>Ggeeks Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className='h-screen'> */}
        <h1 className='md:text-[89px]  '>Divided By College</h1>
        <h1 className='md:text-[80px] '>United By Gaming</h1>
        <button type="submit" className='text-2xl border px-2 py-3 my-9 text-orange-500 text-justify rounded-lg '>Join us</button>
      {/* </main> */}
      <About/>
      <Games/>
      <Gallery/>
      <Sponser/>
      <Contact/>
      <Register/>
      
    </div>
  )
}

export default Home
