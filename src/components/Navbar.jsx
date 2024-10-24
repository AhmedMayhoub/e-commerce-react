import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const {setShowSearch} = useContext(ShopContext)
    return (
        <div className='flex items-center justify-between font-medium py-5'>
           <Link to='/'><img src={assets.logo} alt="logo" className='w-32' /></Link> 
            <ul className='hidden sm:flex  items-center gap-5 text-gray-700 text-sm'>
                <NavLink to='/' className='flex items-center gap-1 flex-col'>
                    <p>HOME</p>
                    <hr className='w-2/4 h-[2.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex items-center gap-1 flex-col'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 h-[2.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex items-center gap-1 flex-col'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 h-[2.5px] border-none bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex items-center gap-1 flex-col'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 h-[2.5px] border-none bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex item-center gap-6'>
                <img onClick={()=>{setShowSearch(true)}} src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
                <div className=' group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile-icon" />
                    <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-1 py-4 px-5 bg-slate-100 text-gray-500 rounded shadow-md'>
                            <p className=' hover:text-black duration-300 cursor-pointer '>MyProfile</p>
                            <p className=' hover:text-black duration-300 cursor-pointer '> Orders</p>
                            <p className=' hover:text-black duration-300 cursor-pointer '>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} alt="cart-icon" className='w-5 min-w-5 cursor-pointer' />
                    <p className=' absolute right-[-5px] bottom-[-5px] text-center w-4 aspect-square bg-black text-white leading-4 rounded-full text-[10px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden ' alt="" />
            </div>
            <div className={`absolute right-0 top-0  bottom-0 bg-white  overflow-hidden transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className='flex flex-col text-gray-600'>
                    <div className='flex items-center gap-4 p-3' onClick={() => setVisible(false)}>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer'  alt="" />
                        <p className='text-gray-500 cursor-pointer' >Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} to='/' className= 'py-3 pl-6'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/collection' className= 'py-3 pl-6 border'>COLLECTIONS</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='about' className= 'py-3 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='contact' className= 'py-3 pl-6 border'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar