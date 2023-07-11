import Link from 'next/link'
import React from 'react'
import email from '../public/svg/email.svg';
import github from '../public/svg/github.svg';
import linkedin from '../public/svg/linkedin.svg';
import Image from 'next/image';

function Hero() {
  return (
    <div className='mt-28 flex flex-col justify-center items-center text-center'>
        <h1 className='text-black font-bold text-6xl sm:text-7xl lg:text-8xl'>Hi, I&apos;m Jeff.</h1>      
        <h2 className='mt-7 text-[18px] text-black w-80 sm:text-xl sm:w-[490px] md:text-2xl md:w-[570px] lg:w-[710px]'>
         I&apos;m a Frontend Developer based in Phililippines. I design and build interactive websites that run across platforms & devices
        </h2>
        {/* <div className='mt-10 text-blue uppercase flex flex-row gap-3'>
            <Link href="/about" className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>View Projects</Link>
            <Link href="/about"className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>Read About me</Link>
        </div> */}
        <div className='flex flex-row mt-7 gap-5'>
          <div>
            <Image
              src={email}
              width={22}
              alt="email"
            /> 
          </div>
          <div>
            <Image
              src={github}
              width={23}
              alt="email"
            /> 
          </div>
          <div>
            <Image
              src={linkedin}
              width={23}
              alt="email"
            /> 
          </div>
        </div>
    </div>
  )
}

export default Hero