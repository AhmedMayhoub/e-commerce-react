import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'

const SearchNav = () => {
    const { showSearch, setShowSearch ,setSearch } = useContext(ShopContext)
    const  location  = useLocation();
    const [viable , setViable]= useState(false)

    useEffect(() => {
        if (location.pathname.includes("/collection")) {
            setViable(true);
        }
        else {
            setViable(false)
        }
    },[location])
  return showSearch && viable ? (
      <div className='bg-[#f8f5f5] m-auto text-center my-4 max-w-[600px] rounded-full'>
          <div className='flex items-center justify-center gap-2 py-2 px-4 sm:py-4 sm:px-6'>
              <input onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-inherit outline-none "type="text" placeholder='Search' />
              <img onClick={()=>{setShowSearch(false)}} className="w-3 cursor-pointer"src={assets.cross_icon} alt="" />

          </div>
          
     </div>
  ) : null
}

export default SearchNav