import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
      <div className='inline-flex items-center gap-2'>
          <p className='w-8 md:w-12 h-[2px] bg-[#414141] '></p> <span className=' font-medium sm:text-sm md:text-2xl lg:text-3xl'>{text1} {text2}</span>
      </div>
  )
}

export default Title