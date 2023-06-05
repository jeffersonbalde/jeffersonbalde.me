import Image from 'next/image'
import discovery from '../public/svg/discovery.svg'
import n01 from '../public/svg/n01.svg'

function Workflow() {
  return (
    <div className='mt-28 flex flex-col items-center justify-center text-center'>
        <div>
            <h1 className='text-black uppercase text-2xl font-bold'>My Workflow<span className='text-blue text-[31px]'>.</span></h1>
            <h2 className='text-grey text-base mt-2'>Over the years, I have cultivated a strong adherence to these engineering 
            processes through practical experience.</h2>
        </div>
        <div className='relative'>
            <div className='border border-blue flex flex-col items-left w-[264px] mt-[52px] p-6 h-56 justify-center'>
                <Image 
                    src={discovery}
                    alt='discovery and planning'
                    className='mb-2'
                />
                <Image 
                    src={n01}
                    alt='01'  
                    className='absolute left-[222px] bottom-[155px]'              
                />
                <div className='text-left'>
                    <h1 className='text-lg text-black font-bold'>Discovery and Planning</h1>
                    <h6 className='text-sm text-grey'>Conduct thorough research and planning to define project goals 
                    and deliverables.</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow