import Image from 'next/image'
import html from '../public/svg/html.svg'
import css from '../public/svg/css.svg'
import javascript from '../public/svg/javascript.svg'
import typescript from '../public/svg/typescript.svg'
import java from '../public/svg/java.svg'
import reactjs from '../public/svg/react.svg'
import tailwind from '../public/svg/tailwind.svg'
import nodejs from '../public/svg/nodejs.svg'
import mongodb from '../public/svg/mongodb.svg'
import mysql from '../public/svg/mysql.svg'
import postgre from '../public/svg/postgre.svg'
import nextjs from '../public/svg/nextjs.svg'
import git from '../public/svg/git.svg'
import github from '../public/svg/github.svg'
import figma from '../public/svg/figma.svg'

function Skills() {
  return (
    <div className='mt-28 flex flex-col items-center justify-center text-center'>
        <div>
            <h1 className='text-black uppercase text-2xl font-bold sm:text-3xl lg:text-4xl'>My Experience<span className='text-blue text-[31px]'>.</span></h1>
            <h2 className='text-grey text-base mt-2 sm:w-[500px] sm:text-lg lg:text-xl lg:w-[600px]'>I have a keen interest in developing innovative projects and expanding 
            my knowledge in the following technology stacks.</h2>
        </div>
        <div className='mt-7 flex flex-row items-center gap-3 flex-wrap w-72 justify-center sm:w-96 lg:w-[500px]'>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={html}
                    alt='HTML5'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='uppercase text-grey text-xs ml-2 sm:text-sm'>html5</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={css}
                    alt='CSS3'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='uppercase text-grey text-xs ml-2 sm:text-sm'>css3</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={javascript}
                    alt='JavaScript ES6+'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>JavaScript ES6+</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={typescript}
                    alt='TypeScript'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>TypeScript</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={java}
                    alt='Java'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Java</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={reactjs}
                    alt='React.js'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>React.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={tailwind}
                    alt='Tailwind CSS'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Tailwind CSS</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={nodejs}
                    alt='Node.js'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Node.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={mongodb}
                    alt='MongoDB'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>MongoDB</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={mysql}
                    alt='mySQL'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>MySQL</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={postgre}
                    alt='PostgreSQL'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>PostgreSQL</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={nextjs}
                    alt='Next.js'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Next.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={git}
                    alt='Git'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Git</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={github}
                    alt='Github'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Github</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={figma}
                    alt='Figma'
                    className='h-4 w-3 sm:w-5'
                />
                <h6 className='text-grey text-xs ml-2 sm:text-sm'>Figma</h6>
            </div>
        </div>
    </div>
  )
}

export default Skills