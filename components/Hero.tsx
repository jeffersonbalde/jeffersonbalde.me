import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='mt-20'>
        <h1 className='text-blue font-bold text-[41px]'>Hi, I&apos;m Jeff.</h1>      
        <h2 className='mt-2 text-lg text-grey'>I’m a <span className='text-blue'>Front End Developer</span> who enjoys crafting high-performing 
            beautiful websites that are conversion-focused, brand-accurate, 
            & people-friendly.
        </h2>
        <h6 className='text-grey mt-3 text-base'>Currrently studying Computer Science at 
            <span className='text-blue'> Saint Columban College</span>
        </h6>
        <h6 className='text-grey mt-3 text-base'>Living in <span className='text-blue'>Pagadian City, Philippines</span></h6>
        <div className='mt-9 text-blue text-[12px] uppercase'>
            <Link href="/about" className='border border-blue py-4 px-5 mr-3'>View Projects</Link>
            <Link href="/about"className='border border-blue py-4 px-5'>Read About me</Link>
        </div>
    </div>
  )
}

export default Hero