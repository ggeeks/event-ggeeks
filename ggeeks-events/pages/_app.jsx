import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../assets/lone-logo.png"
import { AiOutlineClose } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { FaInstagramSquare, FaDiscord, FaWhatsapp, FaTelegram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='text-white revamp bg-animate'>
     
      <header className="  h-24  text-white ">
      <nav className=" flex  justify-between   items-center p-4">
        <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-20 h-20 rounded-full items-center">
              <Image
                src={Logo}
                alt="home"
                className="w-20 h-20 rounded-full  object-cover"
              />
            </div>
          <h1 className='items-center text-xl py-5'><span className='text-orange-400'>Gaming </span>Geeks</h1>
        </div>
        </div>
        <div className="text-white md:flex hidden  flex-row  items-center ">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <ul className='flex text-xl '>
              <Link
              href="/"
              className="text-lg block justify-center scroll-smooth"
            >
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Home
              </li>
            </Link>
            <Link href="/Games" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Games
              </li>
            </Link>
            <Link href="/Gallery" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Gallery
              </li>
            </Link>
            <Link href="/Sponser" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Sponser
              </li>
            </Link>
            <Link href="/Contact" className="text-lg justify-center">
              <li className="justify-items-center hover:text-[#fdfd96] px-2">
                Contact
              </li>
            </Link>
            <Link href='/Register'>
              <li className='justify-items-center hover:text-[#fdfd96] px-2'>
                Register
              </li>
            </Link>
            </ul>
            
          </div>
        </div>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <div className='items-center'>
              <ul className='flex flex-col text-xl'>
              <Link
              href="/"
              className="text-lg block justify-center scroll-smooth"
            >
              <li className="justify-items-center py-3 hover:text-[#fdfd96] px-2">
                Home
              </li>
            </Link>
            <Link href="/Games" className=" text-lg justify-center">
              <li className="py-3 justify-items-center hover:text-[#fdfd96] px-2">
                Games
              </li>
            </Link>
            <Link href="/Gallery" className="text-lg justify-center">
              <li className="justify-items-center  py-3 hover:text-[#fdfd96] px-2">
                Gallery
              </li>
            </Link>
            <Link href="/Sponser" className="text-lg justify-center">
              <div className="justify-items-center  py-3 hover:text-[#fdfd96] px-2">
                Sponser
              </div>
            </Link>
            <Link href="/Contact" className="text-lg justify-center">
              <div className="justify-items-center  py-3 hover:text-[#fdfd96] px-2">
                Contact
              </div>
            </Link>
            <Link href='/Register'>
              <li className='justify-items-center  py-3 hover:text-[#fdfd96] px-2'>
                Register
              </li>
            </Link>
            </ul>
                </div>
              </ul>
          )}
        </div>
      </nav>
    </header>
      {/* <hr /> */}
      <div className='mx-20 my-7  text-center'>
        <Component {...pageProps} />
      </div>
      <hr />
      <footer>
        <div className='flex  text-3xl justify-evenly py-3'>
          <div className='flex justify-evenly'>
            <ul className='flex flex-row '>
              <li className='py-2 px-5'>
                <Link to='' href='' className=''>
                  <FaYoutube className='text-white' />
                </Link>
              </li>
              <li className='py-2 px-5'>
                <Link to='' href=''>
                  <FaInstagramSquare className='text-white' />
                </Link>
              </li>
              <li className='py-2 px-5'>
                <Link to='' href=''>
                  <FaDiscord className='text-white' />
                </Link>
              </li>
              <li className=' py-2 px-5'>
                <Link to='' href=''>
                  <FaLinkedin className='text-white' />
                </Link>
              </li>
              <li className=' py-2 px-5'>
                <Link to='' href=''>
                  <FaTelegram className='text-white' />
                </Link>
              </li>
              <li className=' py-2 px-5'>
                <Link to='' href=''>
                  <FaWhatsapp className='text-white' />
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h1 className='text-lg items-center justify-center my-2'>© 2022 All right reserved</h1>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MyApp
