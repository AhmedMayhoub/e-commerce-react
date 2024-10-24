import React from 'react'

const NewsLettersBox = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
      <div className='text-center'>
          <p className='text-gray-800 text-2xl font-medium  '>Subscribe Now And Get 20% Off</p>
          <p className='text-gray-400 mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero hic recusandae atque.</p>
          <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border '>
              <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter Your Email' required />
              <button onSubmit={handleSubmit} className='px-10 py-3 bg-black text-white text-xs' type="submit">Subscribe</button>
          </form>
    </div>
  )
}

export default NewsLettersBox