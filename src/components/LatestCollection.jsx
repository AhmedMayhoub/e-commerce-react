import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext)

    const [latestProduct, setLatestProduct] = useState([]);
    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    }, [])
    return (
        <div className='my-10'>
            <div className='py-4  text-center'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
                <p className=' my-4 w-3/4 m-auto text:sm md:text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProduct.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}

            </div>
        </div>
    )

}

export default LatestCollection