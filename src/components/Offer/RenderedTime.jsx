import React from 'react'

const RenderedTime = ( { hours, days, minutes, seconds }) => {
  return (
    <div className='flex gap-x-6 mt-[32px]'>
      
      
      <div className='bg-white w-[62px] h-[62px] rounded-full  flex flex-col justify-center items-center px-[14px] py-[15px]'>
        <p className='font-primary font-semibold'>{hours}</p>
        <p className='font-primary text-[11px]'>hours</p>
      </div>

      <div className='bg-white w-[62px] h-[62px] rounded-full  flex flex-col justify-center items-center px-[14px] py-[15px]'>
        <p className='font-primary font-semibold'>{days}</p>
        <p className='font-primary text-[11px]'>days</p>
      </div>

      <div className='bg-white w-[62px] h-[62px] rounded-full  flex flex-col justify-center items-center px-[14px] py-[15px]'>
        <p className='font-primary font-semibold'>{minutes}</p>
        <p className='font-primary text-[11px]'>minutes</p>
      </div>

      <div className='bg-white w-[62px] h-[62px] rounded-full  flex flex-col justify-center items-center px-[14px] py-[15px]'>
        <p className='font-primary font-semibold'>{seconds}</p>
        <p className='font-primary text-[11px]'>seconds</p>
      </div>

    </div>
  )
}

export default RenderedTime
