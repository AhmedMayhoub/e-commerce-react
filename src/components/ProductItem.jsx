import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, image, name, price }) => {
  const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`}>
      <div className='overflow-hidden shadow-lg rounded-md'>
        <img className='hover:scale-110 duration-200' src={image[0]} alt="" />
        <p className= 'px-1 py-4 sm:text-xs text-gray-600'>{name}</p>
        <p className=' px-1 pb-3 text-gray-800 font-medium text-sm'>{currency} {price}</p>
   </div>
    </Link>
  )
}

export default ProductItem