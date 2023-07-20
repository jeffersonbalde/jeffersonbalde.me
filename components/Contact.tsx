'use client'

import { motion, useAnimation, useInView } from 'framer-motion';
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import email from '../public/svg/email.svg';
import Image from 'next/image';

function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView])

  return (
    <motion.div 
      className='mt-28 flex flex-col items-center text-center' 
      id='contact'        
      ref={ref}
      variants={{
          hidden: { y: -10, opacity: 0 },
          visible: {  y: 0, opacity: 1}
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.2}}
    >
        <p className='text-black text-sm sm:text-base'>Need a High-Performing Website?</p>
        <h1 className='text-black uppercase text-2xl font-bold mt-2 sm:text-3xl lg:text-4xl'>LET’S GET <span className='text-blue'>STARTED.</span></h1>
        <h6 className='text-black  text-base mt-2 w-80 sm:w-[500px] sm:text-lg lg:text-xl lg:w-[600px]'>To inquire or schedule a consultation, kindly email me. Let&apos;s connect and turn your ideas into reality.</h6>
        <div className='mt-9 text-white text-[12px] uppercase'>
          <Image 
            src={email}
            alt="Email"
          />
        <Link 
          href={'mailto:jeffersonbalde13@gmail.com'}
          className='border border-blue w-32 text-xs p-3 md:text-sm md:w-36 bg-blue rounded-full px-5'>
          SEND ME AN EMAIL
        </Link>
        </div>
    </motion.div>  
  )
}

export default Contact