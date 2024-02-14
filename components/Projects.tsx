'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import project1 from '../public/assets/project1.png'
import project2 from '../public/assets/project2.png'
import project3 from '../public/assets/project3.png'
import project4 from '../public/assets/project4.png'
import project5 from '../public/assets/project5.png'
import project6 from '../public/assets/project6.png'
import project7 from '../public/assets/project7.png'
import project8 from '../public/assets/project8.png'
import project9 from '../public/assets/project9.png'
import project10 from '../public/assets/project10.png'
import project11 from '../public/assets/project11.png'
import project12 from '../public/assets/project12.png'
import CAndS from '../public/assets/C&S.png'
import AllJShop from '../public/assets/AllJShop.png'
import Unifit from '../public/assets/UnifitManagement.png'
import project13 from '../public/assets/project13.png'
import project14 from '../public/assets/project14.png'
import project15 from '../public/assets/project15.png'
import { motion, useAnimation, useInView } from 'framer-motion';
import { idText } from 'typescript';

function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView])

  return (
    <div className='pt-36 flex flex-col justify-center items-center max-w-[1320px] m-auto px-5' id="projects">

        {/* <div className='' >
            <div className=''>
                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{duration: 0.8, delay: 0.8}}
                >
                    <motion.div 
                        className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200'
                        whileHover={{
                            x: 0,
                            y: 0,
                            scale: 0.99,
                            rotate: 0,
                        }}
                        transition={{duration: 0.2}}
                        >
                        <Image 
                            src={project9}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.07] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[530px] md:w-[650px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>Trafico </span> 
                                    <span className='text-grey'>provides traffic management consultants so you get started quickly.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jfftrafico.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>Trafico</h2>
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>React.js &nbsp;&nbsp; /&nbsp;&nbsp; Next.js /&nbsp;&nbsp; Tailwind CSS /&nbsp;&nbsp; Framer Motion</h6>
                    </div>
                </motion.div>        
            </div>
        </div> */}
        
        {/* <motion.div 
            className='mt-12'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5}}
        >
            <motion.div 
                className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                whileHover={{
                    x: 0,
                    y: 0,
                    scale: 0.99,
                    rotate: 0,
                }}
                transition={{duration: 0.2}}
            >
                <Image 
                    src={project10}
                    alt="scc website"
                    className='object-cover group-hover:opacity-[0.05] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                    <div className='text-center'>
                        <p className='text-xl sm:text-3xl md:text-4xl'> 
                            <span className='text-grey font-bold'>WebChat </span> 
                            <span className='text-grey'>is a web application for users to chat in a one shared room.</span>
                        </p>
                    </div>
                    <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                        <a href="https://jffbeshyconvo.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                    </div>
                </div>
            </motion.div>
            <div className='mt-1 flex flex-row items-center'>
                <h2 className='text-lg mr-5 text-black md:text-xl'>WebChat</h2>
                <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; Tailwind CSS /&nbsp;&nbsp; Firebase</h6>
            </div>
        </motion.div> */}

        {/* <motion.div 
            className='mt-12'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.5}}
        >
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project11}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>DG News </span> 
                                    <span className='text-grey'>is a web application that allows users to browse news from around the world.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jdailynews.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>DG News</h2>
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; Tailwind CSS /&nbsp;&nbsp; GraphQL</h6>
                    </div>
                
        </motion.div> */}
        <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project13}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>AisleDesigns </span> 
                                    <span className='text-grey'>is a leading creative design agency specializing in logo design, web design, and more.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://www.aisledesigns.com/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>AisleDesigns </h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; Tailwind CSS /&nbsp;&nbsp; Framer Motion</h6>
                     </div>
        </div>

        {/* <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project4}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>MarketMinds </span> 
                                    <span className='text-grey'>is committed to propelling your brand towards unrivaled online success, from ideation to execution.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jmarketminds.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>MarketMinds</h2>
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
                     </div>
        </div> */}

        {/* <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project6}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>DailyNews </span> 
                                    <span className='text-grey'>is a web application that allows users to browse news from around the world.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jdailynews.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>DailyNews</h2>
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; TailwindCSS /&nbsp;&nbsp; GraphQL</h6>
                     </div>
        </div> */}

        {/* <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project7}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>WebChat </span> 
                                    <span className='text-grey'>is a web application for users to chat in a one shared room.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jffbeshyconvo.vercel.app" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>WebChat</h2>
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; TailwindCSS /&nbsp;&nbsp; Firebase</h6>
                     </div>
        </div> */}


                <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project14}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>C&S Cakes and Bakery Products </span> 
                                    <span className='text-grey'>provides 5 star quality Cakes and Pastries, tasty bakery products for.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://cands.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>C&S Cakes and Bakery Products </h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>JavaScript &nbsp;&nbsp; /&nbsp;&nbsp; HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; </h6>
                     </div>
        </div>

        <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={project15}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>POS and Inventory Management System </span> 
                                    <span className='text-grey'>for my client's convenience store in my hometown.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://github.com/jeffersonbalde/AllJShopGeneralMerchandise" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Github</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'> POS and Inventory Management System </h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>C# &nbsp;&nbsp; /&nbsp;&nbsp; Microsoft SQL Server /&nbsp;&nbsp; Windows Form Application &nbsp;&nbsp; </h6>
                     </div>
        </div>

        
        {/* <div className='mt-12'>
                <motion.div 
                    className='relative group hover:bg-[#FFFFFF] hover:shadow-slate-200 shadow-md'
                    whileHover={{
                        x: 0,
                        y: 0,
                        scale: 0.99,
                        rotate: 0,
                    }}
                    transition={{duration: 0.2}}
                >
                        <Image 
                            src={Unifit}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3x    l md:text-4xl'> 
                                    <span className='text-grey font-bold'>Unifit Management </span> 
                                    <span className='text-grey'>is a Desktop Application designed to keep records of students and teachers who have received their uniforms.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://github.com/jeffersonbalde/UniformManagementSystem" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Github</a>
                                
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'> Unifit Management <span className='text-blue uppercase text-base font-semibold'> &nbsp;&nbsp;&nbsp;&nbsp;In development</span></h2>
                        
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>C# &nbsp;&nbsp; /&nbsp;&nbsp; Microsoft SQL Server /&nbsp;&nbsp; Windows Form Application &nbsp;&nbsp; </h6>
                     </div>
        </div> */}

     </div>
  )
}

export default Projects