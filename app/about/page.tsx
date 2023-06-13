import Image from 'next/image'
import profile from '/public/assets/profile2.jpg'

export default function page() {
  return (
    <div>
      <div className='flex flex-col items-center mt-20'>
        <Image
          src={profile}
          className='w-64 h-[450px]'
        />
        <div className='mt-10 w-80 flex flex-col gap-6 text-grey'>
          <div>
            <p>My name is Jefferson Balde. I’m a Front End Developer living in Philippines,
            interested in how people and software can work together to make life better.
            I specialize in <span className='text-blue'>responsive websites</span> and <span className='text-blue'>functional user interfaces.</span></p>
          </div>
          <div>
            <p>I'm an irregular Computer Science student, passionate about programming 
          and building responsive web and mobile applications. I transitioned from 
          BSA to pursue my love for coding. Constantly seeking new knowledge 
          and technologies.</p>
          </div>
          <div>
            <p>I’m also a productivity nerd and love discovering new ways and skills. I 
          enjoy reading/listening to books about growth and self-development, 
          drinking coffee, patting my dogs, and going out for leisurely walks.</p>
          </div>
          <div>
            <p className='text-2xl'>👨🏻‍💻&nbsp;&nbsp;📚&nbsp;&nbsp;☕&nbsp;&nbsp;🐕&nbsp;&nbsp;🚶🏻‍♂️</p>
          </div>
        </div>
      </div>
    </div>
  )
}
