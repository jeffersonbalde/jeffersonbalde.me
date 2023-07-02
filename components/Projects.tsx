'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import project1 from '../public/assets/project1.png'
import project2 from '../public/assets/project2.png'
import project3 from '../public/assets/project3.png'

function Projects() {

  return (
    <div className='mt-40 flex flex-col justify-center items-center'>
        <div className='' >
            <div className=''>
                <Image 
                    src={project1}
                    alt="scc website"
                    className='h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black md:text-xl'>SCC Website</h2>
                    <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                    <h6 className='text-grey text-[14px] md:text-[15px]'>Design & Development</h6>
                </div>
            </div>
        </div>

        <div className='mt-12'>
            <div className=''>
                <Image 
                    src={project2}
                    alt="scc website"
                    className='h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black md:text-xl'>Luzcella</h2>
                    <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                    <h6 className='text-grey text-[14px] md:text-[15px]'>Design & Development</h6>
                </div>
            </div>
        </div>

        <div className='mt-12'>
            <div className=''>
                <Image 
                    src={project3}
                    alt="scc website"
                    className='h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'  
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black md:text-xl'>Syborg</h2>
                    <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6>
                    <h6 className='text-grey text-[14px] md:text-[15px]'>Design & Development</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects