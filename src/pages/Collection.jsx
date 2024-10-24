import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products ,search ,showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [fluterProducts, setFluterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([]);
  const[sortType , setSortType] = useState("relevant")

  const handleChangeCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev=> [...prev , e.target.value])
    }
  }
  
  const handleChangeSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter=() => {
    let productsCopy = products.slice();

    if (showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFluterProducts(productsCopy)
  }

  const sortProduct=()=>{
    
    let fcp = fluterProducts.slice();
    switch (sortType) {
      case "high-low":
        setFluterProducts(fcp.sort((a,b)=>(a.price - b.price)))
        break;
      case "low-high":
        setFluterProducts(fcp.sort((a, b )=> (b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
    
  }, [category, subCategory ,search , showSearch])
  useEffect(() => {
    sortProduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60 mt-5'>
        <p onClick={()=>setShowFilter(!showFilter)}  className='font-medium text-xl cursor-pointer flex items-center gap-4  '>FILTERS
          <img src={assets.dropdown_icon} alt="" className={`h-2 sm:hidden ${showFilter? " rotate-90 " : ""} `} />
        </p>
        {/* side category */}

        <div className={`border border-gray-300 pl-5 py-3 mt-8 rounded  ${showFilter ? "" : "hidden"} sm:block `}>
          <h2 className='text-gray-800 text-sm font-medium mb-2'>CATEGORY</h2>
          <p className='flex items-center gap-2'>
            <input type="checkbox" value={"Men"} onChange={handleChangeCategory} />Men
          </p>
          <p className='flex items-center gap-2'>
            <input type="checkbox"  value={"Women"} onChange={handleChangeCategory} />Women
          </p>
          <p className='flex items-center gap-2'>
            <input type="checkbox" value={"Kids"} onChange={handleChangeCategory} />Kids
          </p>
        </div>

        {/* side subCategory */}

        <div className={`border border-gray-300 px-4 py-2 mt-2 rounded ${showFilter? "" : "hidden"} sm:block `}>
          <h2 className='text-gray-800 font-medium mb-2 text-sm'>TYPE</h2>
          <p className='flex items-center gap-2'>
            <input type="checkbox" value={"Topwear"} onChange={handleChangeSubCategory}/> Top wear
          </p>
          <p className='flex items-center gap-2'>
            <input type="checkbox" value={"Bottomwear"} onChange={handleChangeSubCategory}/> Button wear
          </p>
          <p className='flex items-center gap-2'>
            <input type="checkbox" value={"Winterwear"} onChange={handleChangeSubCategory}/> Winter Wear
          </p>
        </div>
      </div>
      {/* DISPLAY ALL COLLECTION SECTION */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-lg mb-4  '>
          <Title text1={"ALL "} text2={"COLLECTIONS"} />
          <select onChange={(e)=>{setSortType(e.target.value)}} className='border-2 border-gray-700 sm:px-3 sm:p-2  my-3 rounded '>
            <option value="relevant"> Sort By: Relevant</option>
            <option value="high-low"> Sort By: High-to-Low</option>
            <option value="low-high"> Sort By: Low-to-High</option>
          </select>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6'>
          {fluterProducts.map((item, index) => (
            <ProductItem key={index} image={item.image} id={item._id} name={item.name} price={item.price}/>
          ))}
         </div>
      </div>
    </div>
  )
}

export default Collection