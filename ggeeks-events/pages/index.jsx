import Head from 'next/head'
import About from './about'
import Timer from './timer'
import Sponser from './sponsor'
import Contact from './contact'
import FAQ from './faq'
import Register from './register'
import Link from "next/link"
function Home() {
  return (
    <div className=" py-2">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,700;0,800;0,900;1,700&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
        <link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Roboto+Slab&display=swap" rel="stylesheet"></link>
        <title>Events - Gaming Geeks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' revamp  mb-[20vh] items-center justify-center '>

        <h1 className='text-[50px] tracking-[.15em] md:text-[76px] '>Gamer Days 2.0</h1>

        {/* <h1 className='md:text-[40px] text-3xl py-5 '>Date TBA soon </h1> */}
        <Link href='/register' to={<Register />}>
          <button className='md:text-2xl text-lg border md:px-4 white-glassmorphism hover:animate-none animate-bounce md:py-6 px-2 py-4 my-9  rounded-lg '>Register</button>
        </Link>
        {/* <div>
        <iframe src="https://free.timeanddate.com/countdown/i8cr1dax/n54/cf100/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cacfff/cpcfff/pc9f9/tc66c/fn3/fs275/szw320/szh135/iso2022-06-20T00:00:00/pl5/pr5/pt10/pb10" allowtransparency="true" frameborder="0" width="330" height="155"></iframe>
        </div> */}
        <div className='lg:px-64 px-2'>
          <Timer />
        </div>
       


      </main>
       
      <div className='py-10'>
        <About />
      </div>

      <div className='py-10'>
        <Sponser />
      </div>
      <div className='py-10'>
        <Contact />
      </div>
      <div className='py-10'>
        <FAQ />
      </div>
    </div>
  )
}

export default Home
