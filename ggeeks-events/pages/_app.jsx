import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../assets/lone-logo.png"

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-white revamp gradient-bg-services'>
      <nav className='px-10 py-5 flex justify-between'>
        <div className='w-20 h-20'>
          <Image src={Logo} layout='responsive' alt=''/>
        </div>
        <div className='items-center'>
          <ul className='flex justify-center text-xl py-7 text-center items-center'>
            <Link href='/'>
            <li className='mx-5'>
              Home 
            </li>
            </Link>
            <Link href='/About'>
            <li className='mx-5'>
              About
            </li>
            </Link>
            <Link href='/Games'>
            <li className='mx-5 '>
              Games
            </li >
            </Link>
            <Link href='/Gallery'>
            <li className='mx-5'>
              Gallery
            </li>
            </Link>
            <Link href='/Sponser'>
            <li className='mx-5'>
              Sponser
            </li>
            </Link>
            <Link href='/Contact'>
                <li className='mx-5'>
              contact
            </li>
            </Link>
            <Link href='/Register'>
            <li className='mx-5'>
              Register
            </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className='mx-20 my-7  text-center'>
        <Component {...pageProps} />
      </div>
    
    <footer>
      <div className='flex justify-center py-5'>

      </div>
    </footer>
    </div>)
}

export default MyApp
