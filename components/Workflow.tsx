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
            <h1 className='text-black uppercase text-2xl font-bold'>My Workflow<span className='text-blue text-[31px]'>.</span></h1>
            <h2 className='text-grey text-base mt-2'>Over the years, I have cultivated a strong adherence to these engineering 
            processes through practical experience.</h2>
        </div>
        <div className=''>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative'>
                <Image 
                    src={discovery}
                    alt='Discovery and Planning'
                    className='mb-2'
                />
                <Image 
                    src={n01}
                    alt='01'
                    className='absolute left-[200px] bottom-[190px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Discovery and Planning</h1>
                    <h6 className='text-sm text-grey'>Conduct thorough research and planning to define project goals 
                    and deliverables.</h6>
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative'>
                <Image 
                    src={design}
                    alt='Design and Prototyping'
                    className='mb-2'
                />
                <Image 
                    src={n02}
                    alt='02'  
                    className='absolute left-[200px] bottom-[190px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Design and Prototyping</h1>
                    <h6 className='text-sm text-grey'>Create intuitive and visually appealing 
                    designs with interactive prototypes.</h6>
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative'>
                <Image 
                    src={development}
                    alt='Development'
                    className='mb-2'
                />
                <Image 
                    src={n03}
                    alt='03'  
                    className='absolute left-[200px] bottom-[190px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Development</h1>
                    <h6 className='text-sm text-grey'>Write clean and efficient code using 
                    industry best practices.</h6>
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative'>
                <Image 
                    src={testing}
                    alt='Testing and Quality Assurance'
                    className='mb-2'
                />
                <Image 
                    src={n04}
                    alt='04'  
                    className='absolute left-[200px] bottom-[190px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Testing and Quality Assurance</h1>
                    <h6 className='text-sm text-grey'>Perform rigorous testing to identify 
                    and fix any issues.</h6>    
                </div>
            </div>
            <div className='border border-blue flex flex-col items-left w-[240px] mt-[52px] p-6 h-56 justify-center relative'>
                <Image 
                    src={discovery}
                    alt='Deployment and Maintenance'
                    className='mb-2'
                />
                <Image 
                    src={n05}
                    alt='05'  
                    className='absolute left-[200px] bottom-[190px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Deployment and Maintenance</h1>
                    <h6 className='text-sm text-grey'>Deploy the application and provide ongoing support 
                    to ensure its smooth operation.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow