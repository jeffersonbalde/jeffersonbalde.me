import Image from 'next/image';
import project1 from '../public/assets/project1.png'
import project2 from '../public/assets/project2.png'
import project3 from '../public/assets/project3.png'

function Projects() {
  return (
    <div className='mt-40'>
        <div>
            <div className=''>
                <Image 
                    src={project1}
                    alt="scc website"
                    width={500}
                    height={500}
                    className='h-60 w-full'
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black'>SCC Website</h2>
                    <h6 className='text-grey mr-5 text-[12px]'>/</h6>
                    <h6 className='text-grey text-[14px]'>Design & Development</h6>
                </div>
            </div>
        </div>

        <div className='mt-12'>
            <div className=''>
                <Image 
                    src={project2}
                    alt="scc website"
                    width={500}
                    height={500}
                    className='h-60 w-full'
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black'>Luzcella</h2>
                    <h6 className='text-grey mr-5 text-[12px]'>/</h6>
                    <h6 className='text-grey text-[14px]'>Design & Development</h6>
                </div>
            </div>
        </div>

        <div className='mt-12'>
            <div className=''>
                <Image 
                    src={project3}
                    alt="scc website"
                    width={500}
                    height={500}
                    className='h-60 w-full'
                />
                <div className='mt-1 flex flex-row items-center'>
                    <h2 className='text-lg mr-5 text-black'>Enerluz x Jen</h2>
                    <h6 className='text-grey mr-5 text-[12px]'>/</h6>
                    <h6 className='text-grey text-[14px]'>Design & Development</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects