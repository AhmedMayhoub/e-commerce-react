import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className=' flex  flex-col sm:flex-row shadow-lg border-slate-100 border justify-center rounded-xl   '>

      {/* hero section left side */}
      <div className=' w-full sm:w-1/2 flex items-center justify-center flex-col py-10 sm:py-0 '>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-12 bg-[#414141] h-[2px] '></p>
            <p className='font-medium text-sm md:text-base text-[#414141]'>OUR BESTSELLER</p>
          </div>
        <h1 className=' text-3xl lg:text-5xl sm:py-3 leading-relaxed'>LATEST COLLECTIONS</h1>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base text-[#414141]'>SHOP NOW</p>
          <p className='w-8 md:w-12 bg-[#414141] h-[2px] '></p>
        </div>
      </div>
      {/* hero right section  */}
    
        <img className='w-full sm:w-1/2 rounded-r-lg' src={assets.hero_img} alt="" />
  
    </div>
  )
}

export default Hero