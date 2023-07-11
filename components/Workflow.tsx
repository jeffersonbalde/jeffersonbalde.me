import Image from 'next/image'
import discovery from '../public/svg/discovery.svg'
import design from '../public/svg/design.svg'
import development from '../public/svg/development.svg'
import testing from '../public/svg/testing.svg'
import deployment from '../public/svg/deployment.svg'
import n01 from '../public/svg/n01.svg'
import n02 from '../public/svg/n02.svg'
import n03 from '../public/svg/n03.svg'
import n04 from '../public/svg/n04.svg'
import n05 from '../public/svg/n05.svg'

function Workflow() {
  return (
    <div className='mt-28 flex flex-col items-center justify-center text-center'>
        <div>
            <h1 className='text-black uppercase text-3xl font-bold sm:text-4xl lg:text-5xl  '>My Workflow<span className='text-black text-[31px]'>.</span></h1>
            <h2 className='text-black text-[18px] mt-2 sm:w-[500px] sm:text-xl md:text-2xl lg:w-[600px]'>Over the years, I have cultivated a strong adherence to these engineering 
            processes through practical experience.</h2>
        </div>
        <div className='flex flex-row flex-wrap w-96 items-center justify-center md:w-[900px] md:gap-x-16'>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative sm:w-72'>
                <Image 
                    src={discovery}
                    alt='Discovery and Planning'
                    className='mb-2'
                />
                <Image 
                    src={n01}
                    alt='01'
                    className='absolute left-[210px] bottom-[190px] sm:left-[265px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold sm:text-xl'>Discovery and Planning</h1>
                    <h6 className='text-sm sm:text-base'>Conduct thorough research and planning to define project goals 
                    and deliverables.</h6>
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative sm:w-72'>
                <Image 
                    src={design}
                    alt='Design and Prototyping'
                    className='mb-2'
                />
                <Image 
                    src={n02}
                    alt='02'  
                    className='absolute left-[210px] bottom-[190px] sm:left-[265px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold sm:text-xl'>Design and Prototyping</h1>
                    <h6 className='text-sm sm:text-base'>Create intuitive and visually appealing 
                    designs with interactive prototypes.</h6>
                </div>
            </div>
            <div className='text-black border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative sm:w-72'>
                <Image 
                    src={development}
                    alt='Development'
                    className='mb-2'
                />
                <Image 
                    src={n03}
                    alt='03'  
                    className='absolute left-[210px] bottom-[190px] sm:left-[265px]'            
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold sm:text-xl'>Development</h1>
                    <h6 className='text-sm sm:text-base'>Write clean and efficient code using 
                    industry best practices.</h6>
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative sm:w-72'>
                <Image 
                    src={testing}
                    alt='Testing and Quality Assurance'
                    className='mb-2'
                />
                <Image 
                    src={n04}
                    alt='04'  
                    className='absolute left-[210px] bottom-[190px] sm:left-[265px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold sm:text-xl'>Testing and Quality Assurance</h1>
                    <h6 className='text-sm sm:text-base'>Perform rigorous testing to identify 
                    and fix any issues.</h6>    
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative sm:w-72'>
                <Image 
                    src={discovery}
                    alt='Deployment and Maintenance'
                    className='mb-2'
                />
                <Image 
                    src={n05}
                    alt='05'  
                    className='absolute left-[210px] bottom-[190px] sm:left-[265px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold sm:text-xl'>Deployment and Maintenance</h1>
                    <h6 className='text-sm sm:text-base'>Deploy the application and provide ongoing support 
                    to ensure its smooth operation.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow