import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
      <div className='flex flex-col sm:flex-row justify-around  gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-400'>
          <div className=' p-4 hover:shadow-lg duration-300 cursor-pointer  rounded]'>
              <img src={assets.exchange_icon} alt="" className='w-12 mb-5 m-auto' />   
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We Offer hassle Free Exchange Policy</p>
          </div>
          <div className=' p-4 hover:shadow-lg duration-300 cursor-pointer  rounded'>
              <img src={assets.quality_icon} alt="" className='w-12 mb-5 m-auto' />   
              <p className='font-semibold'>7 Days Return Policy</p>
              <p className='text-gray-400'>We Provide 7 Days Return Policy </p>
          </div>
          <div className=' p-4 hover:shadow-lg duration-300 cursor-pointer  rounded'>
              <img src={assets.support_img} alt="" className='w-12 mb-5 m-auto' />   
              <p className='font-semibold'>Best Customers Supports </p>
              <p className='text-gray-400'>We Provide 24/7 Customers Support</p>
          </div>
     </div>
  )
}

export default Policy