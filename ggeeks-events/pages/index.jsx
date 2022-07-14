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
        <title>Event - Gaming Geeks</title>
        <meta name="description" content="We, students from different colleges, organize various Gaming Tournament for different Mobile/PC Games. It is managed by 30+ students from different IITs, NITs, Thapar University, Chitkara University and other prominent Colleges/Universities of India." />
        <meta name="keyword" content="Gaming Geeks, Event Gaming Geeks, Event, ggeeks_insta,Gaming, Geeks, gamers, gamers platform, gamers.platform_ ,esports" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Event - Gaming Geeks" />
        <meta name="description" content="We, students from different colleges, organize various Gaming Tournament for different Mobile/PC Games. It is managed by 30+ students from different IITs, NITs, Thapar University, Chitkara University and other prominent Colleges/Universities of India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://event.ggeeks.me" />
        <meta property="og:title" content="Event - Gaming Geeks" />
        <meta property="og:description" content="We, students from different colleges, organize various Gaming Tournament for different Mobile/PC Games. It is managed by 30+ students from different IITs, NITs, Thapar University, Chitkara University and other prominent Colleges/Universities of India." />
        <meta property="og:image" content="https://doc-0k-0o-docs.googleusercontent.com/docs/securesc/7pt0n586j47352im6pk7u2167m20uo2k/mdk5qg1qrdkgi9o71kjevnrhs57qoqho/1657042125000/08865544693198994583/17977609043681300254/1OT0A5AwyrLgFS153r4Ait-kklkoM7qoA?ax=ACxEAsbA8T6roKu-cuoCh_GtGc16pFeCH87tPXLhQpQIuO3cPtyGaj7Jk7o7xX0cYG8BHZsmkya1TQG75A2927rxQscj8bo5oIpJvVquXc1lYTOKFES6GR78yzj8sO-KRAxuaqW9mWdKBeyjUkVWvZ2ZeZueYZHacsJyCkepggdIHL6i947brQFX3dtqFd4agBsKFButfiC0V9f373LjQ7kfIotxviqr-oW29hp0swNL5ECAB8rJpGBfBN2I1Nand45c9NVwj58cuglqV05a1KUCVG9zvgo2Q__c4QGhJ6wJr1StKawJlrEiUFOed-a6n7ZppXjSTa6mNcGSfpAz-q2fV-xojmo40qDvaYs9907GAcffTUGNLwD4cIlTGY6EYP88gIyNwEdHFewsnlwmBntcxTBlnifSLR3ASZ8YCxo8Vm3X5dal9rCE_rCDuqcnBZGx0nJQYDRCt3HKaQaFMcD6NFDhlqP1LvzhKjtBY4MVfQTHmviThnKNH4J_EROGCJSGbgbzTwnTZ95Ok4_-sZFkokjtQcYsBmPJG_lrX4GCC99pnieesj_BgcTVfQ1Ch1pgm9efaw9vJBqjG7bbthHUgrYlazsMsjXLt-0XB1dOiuXEXxK3G8X6okxb07wSmZKagDfA4tihU1JhMFl-dw-h8thCR92EN9vA56P5aKgEOhkq5CbKMskLNDjfc7iFC1UC8kKWEYg5jezzZw&uuid=03044593-fd34-4666-be4b-c78cc2e08379&authuser=0&nonce=23gd71v9sgg02&user=17977609043681300254&hash=kl2q4lofupdroa0etjhre5teaedvqthm" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://event.ggeeks.me" />
        <meta property="twitter:title" content="Event - Gaming Geeks" />
        <meta property="twitter:description" content="We, students from different colleges, organize various Gaming Tournament for different Mobile/PC Games. It is managed by 30+ students from different IITs, NITs, Thapar University, Chitkara University and other prominent Colleges/Universities of India." />
        <meta property="twitter:image" content="https://doc-0k-0o-docs.googleusercontent.com/docs/securesc/7pt0n586j47352im6pk7u2167m20uo2k/mdk5qg1qrdkgi9o71kjevnrhs57qoqho/1657042125000/08865544693198994583/17977609043681300254/1OT0A5AwyrLgFS153r4Ait-kklkoM7qoA?ax=ACxEAsbA8T6roKu-cuoCh_GtGc16pFeCH87tPXLhQpQIuO3cPtyGaj7Jk7o7xX0cYG8BHZsmkya1TQG75A2927rxQscj8bo5oIpJvVquXc1lYTOKFES6GR78yzj8sO-KRAxuaqW9mWdKBeyjUkVWvZ2ZeZueYZHacsJyCkepggdIHL6i947brQFX3dtqFd4agBsKFButfiC0V9f373LjQ7kfIotxviqr-oW29hp0swNL5ECAB8rJpGBfBN2I1Nand45c9NVwj58cuglqV05a1KUCVG9zvgo2Q__c4QGhJ6wJr1StKawJlrEiUFOed-a6n7ZppXjSTa6mNcGSfpAz-q2fV-xojmo40qDvaYs9907GAcffTUGNLwD4cIlTGY6EYP88gIyNwEdHFewsnlwmBntcxTBlnifSLR3ASZ8YCxo8Vm3X5dal9rCE_rCDuqcnBZGx0nJQYDRCt3HKaQaFMcD6NFDhlqP1LvzhKjtBY4MVfQTHmviThnKNH4J_EROGCJSGbgbzTwnTZ95Ok4_-sZFkokjtQcYsBmPJG_lrX4GCC99pnieesj_BgcTVfQ1Ch1pgm9efaw9vJBqjG7bbthHUgrYlazsMsjXLt-0XB1dOiuXEXxK3G8X6okxb07wSmZKagDfA4tihU1JhMFl-dw-h8thCR92EN9vA56P5aKgEOhkq5CbKMskLNDjfc7iFC1UC8kKWEYg5jezzZw&uuid=03044593-fd34-4666-be4b-c78cc2e08379&authuser=0&nonce=23gd71v9sgg02&user=17977609043681300254&hash=kl2q4lofupdroa0etjhre5teaedvqthm" />
      </Head>

      <main className=' revamp  my-[20vh] items-center justify-center '>
        <h1 className='text-[50px] tracking-[.15em] md:text-[76px] '>Gamer Days 2.0</h1>
        {/* <h1 className='md:text-[40px] text-3xl py-5 '>Date TBA soon </h1> */}
        <Link href='/register' to={<Register />}>
          <button className='md:text-2xl text-lg border md:px-4 white-glassmorphism hover:animate-none animate-bounce md:py-6 px-2 py-4 my-9  rounded-lg '>Register</button>
        </Link>
        {/* <div>
        <iframe src="https://free.timeanddate.com/countdown/i8cr1dax/n54/cf100/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cacfff/cpcfff/pc9f9/tc66c/fn3/fs275/szw320/szh135/iso2022-06-20T00:00:00/pl5/pr5/pt10/pb10" allowtransparency="true" frameborder="0" width="330" height="155"></iframe>
        </div> */}
        {/* <div className='lg:px-64 px-2'>
          <Timer />
        </div> */}



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
