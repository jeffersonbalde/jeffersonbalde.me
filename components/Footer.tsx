'use client';
import Image from 'next/image';
import linkedLink from '../public/svg/linkedLink.svg'
import email from '../public/svg/email.svg';
import github from '../public/svg/github.svg';
import linkedin from '../public/svg/linkedin.svg';


import { useState } from "react";
import Link from 'next/link';

function Footer() {
    const [showMenuPages, setShowMenuPages] = useState(false);
    const [showMenuLanguages, setShowMenuLanguages] = useState(false);
    const [showMenuFrameworks, setShowMenuFrameWorks] = useState(false);
    const [showMenuTools, setShowMenuTools] = useState(false);

    const handleClickPages = () => {
        setShowMenuPages(currentState => !currentState);
    }

    const handleClickLanguages = () => {
        setShowMenuLanguages(currentState => !currentState);
    }

    const handleClickFrameworks = () => {
        setShowMenuFrameWorks(currentState => !currentState);
    }

    const handleClickTools = () => {
        setShowMenuTools(currentState => !currentState);
    }

  return (
    <footer className='mt-28 text-black px-5'>
        <hr className=' border-grey'/>
        <div className='mt-10 md:mt-12 md:flex flex-row justify-between md:w-[720px] lg:w-[800px] md:m-auto'>
            <h1 className='text-black font-bold text-3xl mt-6 md:mt-4'>JB</h1>
            <div className='mt-2'>
                <hr className='a border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickPages}
                    >
                        Pages</h1>
                    <div className=''>
                    {showMenuPages ? (
                        <div className="mt-2 text-base">
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                        </div>
                    ) :  (
                        <div className="mt-2 text-base hidden md:block">
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            <p className="mt-0.5  cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                        </div>
                    )}
                    </div>
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickLanguages}
                    >
                        Languages</h1>
                    {showMenuLanguages ? (
                        <div className="mt-2 text-base">
                            <p className="mt-0.5 ">JavaScript</p>
                            <p className="mt-0.5 ">TypeScript</p>
                            <p className="mt-0.5 ">Python</p>
                            <p className="mt-0.5 ">Java</p>
                            <p className="mt-0.5 ">PHP</p>
                            <p className="mt-0.5 ">SQL</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className="mt-0.5 ">JavaScript</p>
                            <p className="mt-0.5 ">TypeScript</p>
                            <p className="mt-0.5 ">Python</p>
                            <p className="mt-0.5 ">Java</p>
                            <p className="mt-0.5 ">PHP</p>
                            <p className="mt-0.5 ">SQL</p>
                        </div>
                    )}
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickFrameworks}
                    >
                        Frameworks</h1>
                    {showMenuFrameworks ? (
                        <div className="mt-2 text-base">
                            <p className='mt-0.5 '>ReactJs</p>
                            <p className='mt-0.5 '>NextJs</p>
                            <p className='mt-0.5 '>Node</p>
                            <p className='mt-0.5 '>Express</p>
                            <p className='mt-0.5 '>Mongoose</p>
                            <p className='mt-0.5 '>Prisma</p>
                            <p className='mt-0.5 '>Tailwind</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 '>ReactJs</p>
                            <p className='mt-0.5 '>NextJs</p>
                            <p className='mt-0.5 '>Node</p>
                            <p className='mt-0.5 '>Express</p>
                            <p className='mt-0.5 '>Mongoose</p>
                            <p className='mt-0.5 '>Prisma</p>
                            <p className='mt-0.5 '>Tailwind</p>
                        </div>
                    )}
            </div>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickTools}
                    >
                        Tools</h1>
                    {showMenuTools ? (
                        <div className="mt-2 text-base">
                            <p className='mt-0.5 '>VS Code</p>
                            <p className='mt-0.5 '>IntelliJ IDEA</p>
                            <p className='mt-0.5 '>Eclipse</p>
                            <p className='mt-0.5 '>Figma</p>
                            <p className='mt-0.5 '>MongoDB Atlas</p>
                            <p className='mt-0.5 '>Vercel</p>
                            <p className='mt-0.5 '>Render</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 '>VS Code</p>
                            <p className='mt-0.5 '>IntelliJ IDEA</p>
                            <p className='mt-0.5 '>Eclipse</p>
                            <p className='mt-0.5 '>Figma</p>
                            <p className='mt-0.5 '>MongoDB Atlas</p>
                            <p className='mt-0.5 '>Vercel</p>
                            <p className='mt-0.5 '>Render</p>
                        </div>
                    )}
            </div>
        </div>
        <div className='mt-2 md:block'>
            <hr className=' border-grey md:hidden'/>
            <div className='mt-14 flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row justify-center gap-3 items-center'>
                    <Link
                        href="email"
                    >
                        <Image 
                            src={email}
                            alt='Github Image'
                        />
                    </Link>
                    <Link
                        href="https://github.com/jeffersonbalde"
                        target="_blank" rel="noreferrer"
                    >
                        <Image 
                            src={github}
                            alt='Linked Image'
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/jeffersonbalde/"
                        target="_blank" rel="noreferrer"
                    >
                        <Image 
                            src={linkedin}
                            alt='Resume Image'
                        />
                    </Link>
                </div>
                <div className='mt-2'>
                    <p className=' text-sm'>Copyright © 2023 Jefferson Balde. <br/>All rights reserved.</p>
                    <br />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer