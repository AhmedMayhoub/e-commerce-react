import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchData = async () => {
    
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0])
        return null;
      } 
    })
  }
   
  useEffect(() => {
    fetchData();
  },[products , productId])
  return  productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in-out opacity-100'>
      {/* product Data */}
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
         
        {/* product image */}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex sm:flex-col gap-2 overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[50%] sm:w-[full] sm:mb-3 cursor-pointer sm:flex-shrink-0' />
            ))}
          </div>
          <div className='w-full sm:w-[80%] '>
            <img className='w-full h-[auto]' src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product