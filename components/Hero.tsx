import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='mt-28 flex flex-col justify-center items-center text-center'>
        <h1 className='text-grey font-bold text-6xl sm:text-7xl lg:text-8xl'>Hi, I&apos;m Jeff.</h1>      
        <h2 className='mt-7 text-[18px] text-grey w-80 sm:text-xl sm:w-[490px] md:text-2xl md:w-[570px] lg:w-[710px]'>I’m a Freelance <span className='text-grey'>Front End Developer</span> who enjoys crafting high-performing 
            beautiful websites that are conversion-focused, brand-accurate, 
            & people-friendly.
        </h2>
        <div className='mt-10 text-blue uppercase flex flex-row gap-3'>
            <Link href="/about" className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>View Projects</Link>
            <Link href="/about"className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>Read About me</Link>
        </div>
    </div>
  )
}

export default Hero