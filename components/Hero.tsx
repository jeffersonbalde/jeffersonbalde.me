import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='mt-28 flex flex-col justify-center items-center text-center'>
        <h1 className='text-grey font-bold text-5xl sm:text-6xl'>Hi, I&apos;m Jeff.</h1>      
        <h2 className='mt-7 text-base text-grey w-80 sm:text-lg sm:w-96'>I’m a <span className='text-blue'>Front End Developer</span> who enjoys crafting high-performing 
            beautiful websites that are conversion-focused, brand-accurate, 
            & people-friendly.
        </h2>
        <div className='mt-10 text-blue uppercase flex flex-row gap-3'>
            <Link href="/about" className='border border-blue w-32 text-xs p-3'>View Projects</Link>
            <Link href="/about"className='border border-blue w-32 text-xs p-3'>Read About me</Link>
        </div>
    </div>
  )
}

export default Hero