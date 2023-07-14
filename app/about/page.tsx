import Image from 'next/image'
import profile from '/public/assets/profile2.jpg'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-20 sm:mt-16 md:mt-20 sm:flex-row sm:gap-10 md:flex-row md:gap-12 md:justify-center lg:gap-20 lg:py-5'>
        <Image
          src={profile}
          alt='Jefferson Balde'
          className='w-64 h-[465px] sm:w-[250px] sm:h-[475px] md:h-[510px] md:w-[270px] lg:w-72 lg:h-[520px]'
        />
        <div className='text-[17px] mt-10 w-80 flex flex-col gap-6 text-grey sm:mb-10 sm:w-[300px] sm:text-[17px] md:text-[18px] md:w-[350px] md:tracking-wide md:justify-center md:mb-12 lg:w-[450px]'>
          <div className=''>
            <p>
              I&apos;m Jefferson Balde, currently studying Computer Science at Saint Columban College Pagadian. 
              I am a <span className='text-blue'> self-taught Front End Developer specializing in React and Next.js. </span>
            </p>
          </div>
          <div>
            <p>Through my passion for coding, 
              I have gained experience in backend technologies as well, including Node.js, Java, SQL, and NoSQL databases. 
              I have been honing my skills through self-study and paid courses.
            </p>
          </div>
          <div>
            <p>I’m also a productivity nerd and love discovering new ways and skills. I 
              enjoy reading/listening to books about growth and self-development, 
              drinking coffee, patting my dogs, and going out for leisurely walks
          .</p>
          </div>
          <div>
            <p className='text-[33px] mt-1 sm:text-[35px]'>👨🏻‍💻&nbsp;&nbsp;📚&nbsp;&nbsp;☕&nbsp;&nbsp;🐕&nbsp;&nbsp;🚶🏻‍♂️</p>
          </div>
        </div>
      </div>
      <div className=' p-2 bg-aboutme w-full h-screen mt-20 sm:px-3 md:px-6 lg:px-[61px] xl:px-[310px] flex flex-col justify-center tracking-wide'>
        <div className='p-2 py-12'>
          <div className=''>
            <h1 className='text-xl mb-2 tracking-wider sm:text-[22px]'>Education</h1>
          </div>
          <div>
            <hr className='border-grey mb-1 border-[1px]'/>
          </div>
          <div className='text-grey'>
            <p className='text-black md:text-[17px]'>Bachelor of Science in Computer Science <span className='ml-4 text-grey hidden sm:inline'>Saint Columban College Pagadian</span> </p>
            <p className='sm:hidden'>Saint Columban College Pagadian</p>
            <p className='text-sm'>Aug 2020 - April 2025</p>
          </div>
        </div>

        <div className='p-2 py-12'>
          <div className=''>
            <h1 className='text-xl mb-2 tracking-wider sm:text-[22px]'>Certifications</h1>
          </div>  
          <div>
            <hr className='border-grey mb-1 border-[1px]'/>
          </div>
          <div className='text-grey'>
            <p className='text-black md:text-[17px]'>The Complete Web Developer in 2023 <span className='ml-4 text-grey hidden sm:inline'>Udemy</span> </p>
            <p className='sm:hidden'>Udemy</p>
            <Link
              href="https://www.udemy.com/certificate/UC-fe349855-358d-4824-97a6-c061705d600b/"
              target="_blank" rel="noreferrer"
            >
                <p className=' text-blue'>View Certificate</p>
            </Link>
          </div>
          <div className='text-grey mt-14'>
            <p className='text-black md:text-[17px]'>The Frontend Developer Career Path <span className='ml-4 text-grey hidden sm:inline'>Scrimba</span> </p>
            <p className='sm:hidden'>Scrimba</p>
            <Link
              href="https://scrimba.com/certificate/uv7kbPhq/gfrontend"
              target="_blank" rel="noreferrer"
            >
              <p className=' text-blue'>View Certificate</p>
            </Link>
          </div>
          <div className='text-grey mt-14'>
            <p className='text-black md:text-[17px]'>Responsive Web Design Certification <span className='ml-4 text-grey hidden sm:inline'>freeCodeCamp</span> </p>
            <p className='sm:hidden'>freeCodeCamp</p>
            <Link
              href="https://www.freecodecamp.org/certification/jeffersonbalde/responsive-web-design"
              target="_blank" rel="noreferrer"
            >
              <p className=' text-blue'>View Certificate</p>
            </Link>
          </div>
          <div className='text-grey mt-14'>
            <p className='text-black md:text-[17px]'>JavaScript Algorithms and Data Structures <span className='ml-4 text-grey hidden sm:inline'>freeCodeCamp</span> </p>
            <p className='sm:hidden'>freeCodeCamp</p>
            <Link
              href="https://www.freecodecamp.org/certification/jeffersonbalde/javascript-algorithms-and-data-structures"
              target="_blank" rel="noreferrer"
            >
              <p className=' text-blue'>View Certificate</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}