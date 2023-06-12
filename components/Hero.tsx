import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='mt-28 flex flex-col justify-center items-center text-center'>
        <h1 className='text-grey font-bold text-6xl sm:text-7xl lg:text-8xl'>Hi, I&apos;m Jeff.</h1>      
        <h2 className='mt-7 text-[17px] text-grey w-80 sm:text-lg sm:w-[490px] md:text-xl md:w-[570px] lg:w-[710px]'>I’m a Freelance <span className='text-blue'>Front End Developer</span> who enjoys crafting high-performing 
            beautiful websites that are conversion-focused, brand-accurate, 
            & people-friendly.
        </h2>
        <div className='mt-10 text-blue uppercase flex flex-row gap-3'>
            <Link href="/about" className='border border-blue w-32 text-xs p-3 md:text-sm md:w-36'>View Projects</Link>
            <Link href="/about"className='border border-blue w-32 text-xs p-3 md:text-sm md:w-36'>Read About me</Link>
        </div>
    </div>
  )
}

export default Hero