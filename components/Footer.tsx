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
        <h1 className='text-black font-bold text-3xl mt-6'>JB</h1>
        <div className='mt-2'>
            <hr className=' border-grey'/>
            <h1 
                className='text-black font-bold text-xl mt-2 cursor-pointer'
                onClick={handleClickPages}
                >
                    Pages</h1>
                {showMenuPages && (
                    <div className="mt-2 text-base">
                        <p className="cursor-pointer hover:underline underline-offset-1 decoration-1">Home</p>
                        <p className="cursor-pointer hover:underline underline-offset-1 decoration-1">About</p>
                        <p className="cursor-pointer hover:underline underline-offset-1 decoration-1">Works</p>
                        <p className="cursor-pointer hover:underline underline-offset-1 decoration-1">Skills</p>
                        <p className="cursor-pointer hover:underline underline-offset-1 decoration-1">Contact</p>
                    </div>
                )}
        </div>
        <div className='mt-2'>
            <hr className=' border-grey'/>
            <h1 
                className='text-black font-bold text-xl mt-2 cursor-pointer'
                onClick={handleClickLanguages}
                >
                    Languages</h1>
                {showMenuLanguages && (
                    <div className="mt-2 text-base">
                        <p className="">JavaScript</p>
                        <p className="">TypeScript</p>
                        <p className="">Python</p>
                        <p className="">Java</p>
                        <p className="">PHP</p>
                        <p className="">SQL</p>
                    </div>
                )}
        </div>
        <div className='mt-2'>
            <hr className=' border-grey'/>
            <h1 
                className='text-black font-bold text-xl mt-2 cursor-pointer'
                onClick={handleClickFrameworks}
                >
                    Frameworks</h1>
                {showMenuFrameworks && (
                    <div className="mt-2 text-base">
                        <p>ReactJs</p>
                        <p>NextJs</p>
                        <p>Node</p>
                        <p>Express</p>
                        <p>Mongoose</p>
                        <p>Prisma</p>
                        <p>Tailwind</p>
                    </div>
                )}
        </div>
        <div className='mt-2'>
            <hr className=' border-grey'/>
            <h1 
                className='text-black font-bold text-xl mt-2 cursor-pointer'
                onClick={handleClickTools}
                >
                    Tools</h1>
                {showMenuTools && (
                    <div className="mt-2 text-base">
                        <p>VS Code</p>
                        <p>IntelliJ IDEA</p>
                        <p>Eclipse</p>
                        <p>Figma</p>
                        <p>MongoDB Atlas</p>
                        <p>Vercel</p>
                        <p>Render</p>
                        <p>MongoDB Atlas</p>
                    </div>
                )}
        </div>
        <div className='mt-2'>
            <hr className=' border-grey'/>
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
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer