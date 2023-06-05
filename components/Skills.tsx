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
            <h1 className='text-black uppercase text-2xl font-bold'>Technologies<span className='text-blue text-[31px]'>.</span></h1>
            <h2 className='text-grey text-base mt-2'>I have a keen interest in developing innovative projects and expanding 
            my knowledge in the following technology stacks.</h2>
        </div>
        <div className='mt-7 flex flex-row items-center gap-3 flex-wrap w-72 justify-center'>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={html}
                    alt='HTML5'
                    className='h-4 w-3'
                />
                <h6 className='uppercase text-grey text-xs ml-2'>html5</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={css}
                    alt='CSS3'
                    className='h-4 w-3'
                />
                <h6 className='uppercase text-grey text-xs ml-2'>css3</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={javascript}
                    alt='JavaScript ES6+'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>JavaScript ES6+</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={typescript}
                    alt='TypeScript'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>TypeScript</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={java}
                    alt='Java'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Java</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={reactjs}
                    alt='React.js'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>React.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={tailwind}
                    alt='Tailwind CSS'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Tailwind CSS</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={nodejs}
                    alt='Node.js'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Node.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={mongodb}
                    alt='MongoDB'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>MongoDB</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={mysql}
                    alt='mySQL'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>MySQL</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={postgre}
                    alt='PostgreSQL'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>PostgreSQL</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={nextjs}
                    alt='Next.js'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Next.js</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={git}
                    alt='Git'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Git</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={github}
                    alt='Github'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Github</h6>
            </div>
            <div className='flex flex-row border border-blue py-3 px-3'>
                <Image 
                    src={figma}
                    alt='Figma'
                    className='h-4 w-3'
                />
                <h6 className='text-grey text-xs ml-2'>Figma</h6>
            </div>
        </div>
    </div>
  )
}

export default Skills