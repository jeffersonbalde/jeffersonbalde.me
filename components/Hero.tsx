'use client';

import Link from 'next/link'
import React, { useRef } from 'react'
import email from '../public/svg/email.svg';
import github from '../public/svg/github.svg';
import linkedin from '../public/svg/linkedin.svg';
import Image from 'next/image';

import { motion, useAnimation } from "framer-motion";

function Hero() {

  const ref = useRef<string | any>("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
          behavior: "smooth",
      })

      const links = document.querySelectorAll('.nav-link');
      links.forEach((link) => {
          link.classList.remove('active');
      })
      e.currentTarget.classList.add("active");
  }

  return (
    <div className='mt-20 md:mt-32 flex flex-col justify-center items-center text-center'>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{duration: 0.5, delay: 0.5}}
        >
          <h1 className='text-black font-bold text-6xl sm:text-7xl lg:text-8xl'>Hi, I&apos;m Jeff.</h1>      
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.6, delay: 0.6}}
          >
            <h2 className='mt-3 text-[18px] text-black w-80 sm:text-xl sm:w-[490px] md:text-2xl md:w-[570px] lg:w-[710px]'>
            I&apos;m a Frontend Developer based in Phililippines. I design and build interactive websites that run across platforms & devices
            </h2>
          </motion.div>,
        {/* <div className='mt-10 text-blue uppercase flex flex-row gap-3'>
            <Link href="/about" className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>View Projects</Link>
            <Link href="/about"className='border border-blue w-32 text-[13px] p-3 md:text-sm md:w-36'>Read About me</Link>
        </div> */}
        {/* <div className='flex flex-row mt-7 gap-5'>
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
          </div> */}
        {/* </div> */}
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration: 0.7, delay: 0.7}}
          >
          <div className='mt-5'>
            <h1 className='text-black text-lg sm:text-xl font-semibold'>
              <Link
                href="#projects"
                className='nav-link'
                onClick={handleScroll}
              >
              View Projects
              </Link>
                <span className='font-light'> &nbsp; or &nbsp; </span> 
              <Link
                href="/about"
                className='nav-link'
                >
                Read About Me
              </Link>
            </h1>
          </div>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Hero