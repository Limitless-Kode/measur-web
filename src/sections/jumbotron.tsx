import React from 'react'
import Image from 'next/image'
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Jumbotron = () => {
  return (
    <div style={{background: 'linear-gradient(293.5deg, #FA0FF0 -15.93%, #2B0FD4 94.34%)'}} className={`flex flex-col items-center justify-center min-h-[100vh] w-full`}>
      <div className='relative w-[80vw]'>
        <div className='absolute top-[30px] left-[0px] w-[96px] h-[56px]'>
        <Image src={'/assets/images/logo.png'} layout='fill' alt='Measur Logo' />
      </div>
      </div>
      <div className='flex items-center justify-center min-h-[100vh] w-full'>

        <div className='w-[80vw] md:w-[50vw]'>
          <div className='md:w-[25vw] text-white'>
            <h1 className='text-[36px] md:text-[48px] leading-[46px] md:leading-[72px] font-bold md:w-[30vw] mb-[16px]'>We are still developing the measur app.</h1>
            <p className='text-[16px] md:text-[20px] leading-[30px]'>Leave your email and we would alert you immediately we deploy the first version.</p>
          </div>

          <div className='relative md:w-[25vw] h-[60px] rounded-full bg-white flex justify-start pl-[20px] items-center mt-[30px]'>
            <svg width='0' height='0'>
              <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
                <stop stopColor='#2B0FD4' offset='0%' />
                <stop stopColor='#FA0FF0' offset='100%' />
              </linearGradient>
            </svg>
            <FiMail style={{ stroke: 'url(#blue-gradient)' }} size={24} />
            <input type='email' placeholder='you@email.com' className='placeholder:text-slate-400 text-grey-200 font-bold ml-[10px] w-[50vw] md:w-[18vw] h-[60px] rounded-full outline-none' />
            <button 
              style={{ background: 'linear-gradient(293.5deg, #FA0FF0 -15.93%, #2B0FD4 94.34%)' }}
              className='absolute flex items-center text-white justify-center right-[10px] h-[45px] w-[45px] rounded-full'>
                <FiArrowRight size={24} />
              </button>
          </div>
        </div>

        <div className='hidden md:block relative h-[100vh] w-[30vw]'>
          <div className='absolute top-0 w-[100%] h-[90vh]'>
            <Image src={'/assets/images/hand.png'} layout='fill' alt='Email Image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron