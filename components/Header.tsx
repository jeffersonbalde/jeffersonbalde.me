"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <div className='sticky top-0 p-5 w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-900'>
      <div className='max-w-container mx-auto py-1 h-full flex justify-between items-center'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <Link href="/">
          <h1 className='text-base text-black'>Jefferson Balde</h1>
        </Link>
      </motion.div>
      <nav className=''>
        {/* <div className='hidden md:inline-flex justify-between gap-10 text-navbar text-base'>
          <motion.div
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.1}}
            >
              <Link href="/about" className='hover:underline decoration-1'>About</Link>
            </motion.div>

            <motion.div
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.2}}
            >
              <Link href="/" className='hover:underline decoration-1'>Works</Link>
            </motion.div>

            <motion.div
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.3}}
            >
              <Link href="/about" className='hover:underline decoration-1'>Skills</Link>
            </motion.div>

            <motion.div
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.4}}
            >
              <Link href="/about" className='hover:underline decoration-1'>Contact</Link>
            </motion.div>

            <motion.div
              initial={{y: -10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.1, delay: 0.5}}
            >
              <Link href="/about" className='hover:underline decoration-1'>Resume</Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.1, delay: 0.1}}
          >
            <div className='w-6 h-5 flex flex-col justify-between items-center md:hidden
              text-4xl text-navbar cursor-pointer overflow-hidden group'> 
              <span className='w-full h-[2px] bg-navbar inline-flex transform group-hover:translate-x-2
                transition-all ease-in-out duration-300'></span>
              <span className='w-full h-[2px] bg-navbar inline-flex transform translate-x-3 
              group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
              <span className='w-full h-[2px] bg-navbar inline-flex transform translate-x-1
              group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
            </div>
          </motion.div> */}
          <div className='flex flex-row text-black text-base gap-2'>
            <p>works, </p>
            <p>about, </p>
            <p>resume</p>  
          </div>
      </nav>
    </div>
    
    {/* <hr className='border-grey mt-4'/> */}
    </div>

  )
}

export default Header