"use client"

import Link from 'next/link'
import React, { useRef } from 'react'
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
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
      <div className='max-w-[1320px] flex flex-row items-center justify-around m-auto sticky top-0 py-4 w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-300' >
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
        >
          <Link href="/">
            <h1 className='text-[18px] text-black font-bold'>Jefferson Balde <span className='ml-5 uppercase hidden md:inline font-bold'>Software Engineer &nbsp; / &nbsp; Front End Developer</span> </h1>
          </Link>
        </motion.div>
        <nav className='list-none'>
            <div className='flex flex-row text-black text-[16px] gap-2'>
            <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.1}}
                >
                <Link
                  href="#projects"
                  className='nav-link'
                  onClick={handleScroll}
                >
                  works, 
                </Link>
            </motion.li>
            <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.2, delay: 0.2}}
                >
                <Link
                  href="/about"
                  className='nav-link'
                >
                  about, 
                </Link>
            </motion.li>
            <motion.li
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.3, delay: 0.3}}
                >
                <Link
                  href="#projects"
                  className=''
                >
                resume 
              </Link>
            </motion.li>
            </div>
        </nav>
    </div>

  )
}

export default Header