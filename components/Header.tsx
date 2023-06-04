"use client"

import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <div className='max-w-container mx-auto py-1 h-full flex justify-between items-center sticky'>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <Link href="/">
          <h1 className='text-3xl font-bold text-blue'>JB</h1>
        </Link>
      </motion.div>
      <nav className=''>
        <div className='hidden md:inline-flex justify-between gap-10 text-navbar text-base'>
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
          

          {/* menu for mobile */}
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
          </motion.div>
      </nav>
    </div>
  )
}

export default Header