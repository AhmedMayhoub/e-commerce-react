import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      <div>
          <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-6 my-16 border-t py-6'>
              <div>
                  <img src={assets.logo} alt="" className='w-[100px]' />
                  <p className='text-sm text-gray-600 mt-4 min-w-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia rem eius dignissimos dicta quisquam sequi,
                      assumenda consequuntur nesciunt voluptatibus error reprehenderit numquam ipsum vero expedita laborum laboriosam fugit. Perferendis?</p>
              </div>
              <div>
                  <p className='font-medium sm:text-sm md:text-xl lg:text-2xl text-gray-900'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-gray-800 font-medium mt-2 '>
                      <li>HOME</li>
                      <li>ABOUT</li>
                      <li>DELIVERY</li>
                      <li>ORDERS</li>
                  </ul>
              </div>
              <div>
                  <p className='font-medium sm:text-sm md:text-xl lg:text-2xl text-gray-900 sm:font-semibold'>GET IN TOUCH</p>
                  <div className='mt-2'>
                      <p className='text-gray-600'>+0201010446667</p>
                      <p className='text-gray-600'>forever2024@contact.eg</p>
                  </div>

              </div>
          </div>
          <div className='border-t border-gray-400 p-3 text-center font-semibold'>
              <p>Copyright © 2024 forever.e-commerce</p>
          </div>
      </div>
      
  )
}

export default Footer