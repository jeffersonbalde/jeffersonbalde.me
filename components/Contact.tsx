import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='mt-28 flex flex-col items-center text-center'>
        <p className='text-black text-sm'>Need a High-Performing Website?</p>
        <h1 className='text-black uppercase text-2xl font-bold mt-2'>LET’S GET <span className='text-blue'>STARTED.</span></h1>
        <h6 className='text-grey text-base mt-2 w-80'>To inquire or schedule a consultation, kindly email me. Let&apos;s connect and turn your ideas into reality.</h6>
        <div className='mt-9 text-blue text-[12px] uppercase'>
            <Link href="/about" className='border border-blue py-4 px-5 mr-3'>SEND ME AN EMAIL</Link>
        </div>
    </div>  
  )
}

export default Contact