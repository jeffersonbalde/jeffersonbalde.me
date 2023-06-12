import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='mt-28 flex flex-col items-center text-center'>
        <p className='text-black text-sm sm:text-base'>Need a High-Performing Website?</p>
        <h1 className='text-black uppercase text-2xl font-bold mt-2 sm:text-3xl lg:text-4xl'>LET’S GET <span className='text-blue'>STARTED.</span></h1>
        <h6 className='text-grey text-base mt-2 w-80 sm:w-[500px] sm:text-lg lg:text-xl lg:w-[600px]'>To inquire or schedule a consultation, kindly email me. Let&apos;s connect and turn your ideas into reality.</h6>
        <div className='mt-9 text-blue text-[12px] uppercase'>
        <Link href="/about" className='border border-blue w-32 text-xs p-3 md:text-sm md:w-36'>SEND ME AN EMAIL</Link>
        </div>
    </div>  
  )
}

export default Contact