import React from 'react'
import icon1 from '../assets/gaming-world1.png'
import icon2 from '../assets/gaming-world2.png'
import icon3 from '../assets/gaming-world3.png'
import Image from 'next/image'
const Card = () => {
    return (
        <div className=''>
            <div className='justify-between  flex md:flex-row flex-col  '>
                <div className='rt-img1 w-full'>
                    <Image src={icon1} width={150} height={150} alt='left' className='mt-10' />
                    <h1 className='md:text-2xl leading-4  text-xl text-orange-500'>Gaming</h1>
                </div>
                <div className='rt-img2 w-full'>
                    <Image src={icon2} width={150} height={150} alt='center' />
                    <h1 className='md:text-2xl leading-4  text-xl text-orange-500'>Live stream</h1>

                </div>
                <div className='rt-img3 w-full'>
                    <Image src={icon3} width={150} height={150} alt='right' />
                    <h1 className='md:text-2xl leading-4  text-xl text-orange-500'>Tournament</h1>

                </div>
            </div>
        </div>
    )
}

export default Card