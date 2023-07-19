'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import project1 from '../public/assets/project1.png'
import project2 from '../public/assets/project2.png'
import project3 from '../public/assets/project3.png'
import project4 from '../public/assets/project4.png'
import project5 from '../public/assets/project5.png'
import project6 from '../public/assets/project6.png'
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
        <div className='' >
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
                            src={project1}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[530px] md:w-[650px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>PixelIT</span> 
                                    <span className='text-grey'>elevates your brand with creative geniuses, weaving magic through web design, marketing, and technology.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jpixelit.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>PixelIT</h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
                    </div>
                </motion.div>        
            </div>
        </div>
        <motion.div 
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
                    src={project2}
                    alt="scc website"
                    className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                    <div className='text-center'>
                        <p className='text-xl sm:text-3xl md:text-4xl'> 
                            <span className='text-grey font-bold'>Revolve </span> 
                            <span className='text-grey'>connects brands and engages audiences with full-suite digital solutions, tailored to amplify online presence and drive business growth</span>
                        </p>
                    </div>
                    <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                        <a href="https://jrevolve.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                        {/* <a href="#">Github</a> */}
                    </div>
                </div>
            </motion.div>
            <div className='mt-1 flex flex-row items-center'>
                <h2 className='text-lg mr-5 text-black md:text-xl'>Revolve</h2>
                {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
            </div>
        </motion.div>

        <motion.div 
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
                            src={project5}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>OptiReach </span> 
                                    <span className='text-grey'>empowers digital journey, navigating the landscape with confidence through data-driven strategies and innovative solutions.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://joptireach.vercel.app/" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>OptiReach</h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
                    </div>
                
        </motion.div>

        {/* <motion.div 
            className='mt-12'
            ref={ref}
            variants={{
                hidden: { y: -10, opacity: 0 },
                visible: {  y: 0, opacity: 1}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.6, delay: 0.6}}
        > */}
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
                            src={project3}
                            alt="scc website"
                            className='object-cover group-hover:opacity-[0.06] h-64 w-[470px] bg-center sm:w-[623px] sm:h-[330px] md:w-[730px] md:h-[360px] lg:w-[850px] lg:h-[410px]'
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block w-[290px] sm:w-[500px] md:w-[610px] lg:w-[700px]'>
                            <div className='text-center'>
                                <p className='text-xl sm:text-3xl md:text-4xl'> 
                                    <span className='text-grey font-bold'>Fusion </span> 
                                    <span className='text-grey'>is a great platform to buy, sell and rent your properties without any agent or commisions.</span>
                                </p>
                            </div>
                            <div className='mt-4 text-grey text-[17px] sm:text-xl md:text-2xl text-center'> 
                                <a href="https://jfusion.vercel.app//" target='_blank' className='mr-4 text-lg text-blue sm:text-2xl hover:underline decoration-1 '>View Website</a>
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>Fusion</h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
                     </div>
         {/* </motion.div> */}
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
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>MarketMinds</h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>HTML5 &nbsp;&nbsp; /&nbsp;&nbsp; CSS3 &nbsp;&nbsp; /&nbsp;&nbsp; JavaScript</h6>
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
                                {/* <a href="#">Github</a> */}
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-1 flex flex-row items-center'>
                        <h2 className='text-lg mr-5 text-black md:text-xl'>DailyNews</h2>
                        {/* <h6 className='text-grey mr-5 text-[12px] md:text-[15px]'>/</h6> */}
                        <h6 className='text-grey text-[15px] md:text-[16px] ml-5'>TypeScript &nbsp;&nbsp; /&nbsp;&nbsp; Next.js &nbsp;&nbsp; /&nbsp;&nbsp; React.js /&nbsp;&nbsp; TailwindCSS /&nbsp;&nbsp; /&nbsp;&nbsp; GraphQL</h6>
                     </div>
        </div>
     </div>
  )
}

export default Projects