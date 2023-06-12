'use client';
import Image from 'next/image';
import githublink from '../public/svg/githublink.svg';
import linkedLink from '../public/svg/linkedLink.svg'
import resumeLink from '../public/svg/resumelink.svg'

import { useState } from "react";

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
    <footer className='mt-28'>
        <hr className=' border-grey'/>
        <div className='mt-10 md:mt-12 md:flex flex-row justify-between md:w-[720px] lg:w-[800px] md:m-auto'>
            <h1 className='text-black font-bold text-3xl mt-6 md:mt-4'>JB</h1>
            <div className='mt-2'>
                <hr className=' border-grey md:hidden'/>
                <h1 
                    className='text-black font-bold text-xl mt-2 cursor-pointer'
                    onClick={handleClickPages}
                    >
                        Pages</h1>
                    <div className=''>
                    {showMenuPages ? (
                        <div className="mt-2 text-base">
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                        </div>
                    ) :  (
                        <div className="mt-2 text-base hidden md:block">
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                            <p className="mt-0.5 text-grey cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
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
                            <p className="mt-0.5 text-grey">JavaScript</p>
                            <p className="mt-0.5 text-grey">TypeScript</p>
                            <p className="mt-0.5 text-grey">Python</p>
                            <p className="mt-0.5 text-grey">Java</p>
                            <p className="mt-0.5 text-grey">PHP</p>
                            <p className="mt-0.5 text-grey">SQL</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className="mt-0.5 text-grey">JavaScript</p>
                            <p className="mt-0.5 text-grey">TypeScript</p>
                            <p className="mt-0.5 text-grey">Python</p>
                            <p className="mt-0.5 text-grey">Java</p>
                            <p className="mt-0.5 text-grey">PHP</p>
                            <p className="mt-0.5 text-grey">SQL</p>
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
                            <p className='mt-0.5 text-grey'>ReactJs</p>
                            <p className='mt-0.5 text-grey'>NextJs</p>
                            <p className='mt-0.5 text-grey'>Node</p>
                            <p className='mt-0.5 text-grey'>Express</p>
                            <p className='mt-0.5 text-grey'>Mongoose</p>
                            <p className='mt-0.5 text-grey'>Prisma</p>
                            <p className='mt-0.5 text-grey'>Tailwind</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 text-grey'>ReactJs</p>
                            <p className='mt-0.5 text-grey'>NextJs</p>
                            <p className='mt-0.5 text-grey'>Node</p>
                            <p className='mt-0.5 text-grey'>Express</p>
                            <p className='mt-0.5 text-grey'>Mongoose</p>
                            <p className='mt-0.5 text-grey'>Prisma</p>
                            <p className='mt-0.5 text-grey'>Tailwind</p>
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
                            <p className='mt-0.5 text-grey'>VS Code</p>
                            <p className='mt-0.5 text-grey'>IntelliJ IDEA</p>
                            <p className='mt-0.5 text-grey'>Eclipse</p>
                            <p className='mt-0.5 text-grey'>Figma</p>
                            <p className='mt-0.5 text-grey'>MongoDB Atlas</p>
                            <p className='mt-0.5 text-grey'>Vercel</p>
                            <p className='mt-0.5 text-grey'>Render</p>
                        </div>
                    ) : (
                        <div className="mt-2 text-base hidden md:block">
                            <p className='mt-0.5 text-grey'>VS Code</p>
                            <p className='mt-0.5 text-grey'>IntelliJ IDEA</p>
                            <p className='mt-0.5 text-grey'>Eclipse</p>
                            <p className='mt-0.5 text-grey'>Figma</p>
                            <p className='mt-0.5 text-grey'>MongoDB Atlas</p>
                            <p className='mt-0.5 text-grey'>Vercel</p>
                            <p className='mt-0.5 text-grey'>Render</p>
                        </div>
                    )}
            </div>
        </div>
        <div className='mt-2 md:block'>
            <hr className=' border-grey md:hidden'/>
            <div className='mt-14 flex flex-col justify-center items-center text-center'>
                <div className='flex flex-row justify-center gap-3'>
                    <Image 
                        src={githublink}
                        alt='Github Image'
                    />
                    <Image 
                        src={linkedLink}
                        alt='Linked Image'
                    />
                    <Image 
                        src={resumeLink}
                        alt='Resume Image'
                    />
                </div>
                <div className='mt-2'>
                    <p className='text-grey text-sm'>Copyright © 2023 Jefferson Balde. <br/>All rights reserved.</p>
                    <br />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer