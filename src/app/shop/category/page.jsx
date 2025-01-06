"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import categoryImage from "../../assets/category.png";
import filter from "../../assets/mage_filter.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import ProductImage from '../../assets/AdireImage.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Link from 'next/link';
import ProductDatas from '../../components/ProductDatas'


// const Products = [
//     {
//         id: 1,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "200,000",
//     },
//     {
//         id: 2,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "500,000",
//     },
//     {
//         id: 3,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "350,000",
//     },
//     {
//         id: 4,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "150,000",
//     },
//     {
//         id: 5,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "450,000",
//     },
//     {
//         id: 6,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "150,000",
//     },
//     {
//         id: 7,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "950,000",
//     },
//     {
//         id: 8,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "750,000",
//     },
//     {
//         id: 9,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "150,000",
//     },
//     {
//         id: 10,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "850,000",
//     },
//     {
//         id: 11,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "150,000",
//     },
//     {
//         id: 12,
//         image: ProductImage,
//         title: "THE ADIRE ATTIRE",
//         price: "950,000",
//     },
// ]

const ITEMS_PER_PAGE = 8; // Number of items to display per page

const colors = ['#EF4646', '#464BEF', '#EFB946', '#46CDEF'];


const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // State for filter visibility
  const [priceRange, setPriceRange] = useState(50000); // State for price range
  const [selectedSize, setSelectedSize] = useState(null); // State for selected size
  const [selectedColor, setSelectedColor] = useState('#000000'); // State for selected color
  const [sortOrder, setSortOrder] = useState('Newest'); // State for sort order
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const totalPages = Math.ceil(ProductDatas.length / ITEMS_PER_PAGE);
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = ProductDatas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value); 
  };
  const handleClearAll = () => {
    setSelectedSize(null); 
    setSelectedColor('#000000'); 
    setPriceRange(50000); 
  };
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSortSelection = (order) => {
    setSortOrder(order);
    setIsDropdownVisible(false); // Close dropdown after selection
  };

  return (
    <div>
      <div className='w-full'>
        <Image src={categoryImage} alt='category' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
      </div>        
      <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
        <h1 className='font-bold text-[48px] my-10'>Adire</h1>
        <div className='flex items-center justify-between mb-10'>
            <div className='flex items-center gap-4'>
                <Image src={filter} alt='filter' onClick={toggleFilter} className="cursor-pointer"/>
                <p className='font-normal text-[16px] cursor-pointer' onClick={toggleFilter}>SHOW FILTER</p>
            </div>
            <div className='flex items-center gap-4 relative'>
              <p className='font-normal text-[16px]' onClick={toggleDropdown}>SORT BY: {sortOrder}</p>
              <MdOutlineKeyboardArrowDown onClick={toggleDropdown} className="cursor-pointer" />
              {isDropdownVisible && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border-t-4 border-[#FCBA41] shadow-lg z-10">
                      <button 
                          onClick={() => handleSortSelection('Newest')} 
                          className="block px-4 py-2 text-left text-[16px] w-full hover:bg-gray-200"
                      >
                          NEWEST
                      </button>
                      <button 
                          onClick={() => handleSortSelection('Oldest')} 
                          className="block px-4 py-2 text-left text-[16px] w-full hover:bg-gray-200"
                      >
                          OLDEST
                      </button>
                      <button 
                          onClick={() => handleSortSelection('Oldest')} 
                          className="block px-4 py-2 text-left text-[16px] w-full hover:bg-gray-200"
                      >
                          A - Z
                      </button>
                      <button 
                          onClick={() => handleSortSelection('Oldest')} 
                          className="block px-4 py-2 text-left text-[16px] w-full hover:bg-gray-200"
                      >
                          PRICE  ( LOW - HIGH )
                      </button>
                      <button 
                          onClick={() => handleSortSelection('Oldest')} 
                          className="block px-4 py-2 text-left text-[16px] w-full hover:bg-gray-200"
                      >
                          PRICE LOW - HIGH 
                      </button>
                  </div>
              )}
          </div>
        </div>
        <div className='text-center'>
            <div className='grid lg:grid-cols-4 gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3'>
                {currentProducts.map((ProductData, id) => {
                    return (
                        <Link key={id} href={`/shop/product/${ProductData.id}`}>
                                <div key={id} className='text-center'>
                                    <Image src={ProductData.image} alt='newArrival' loading='lazy' width={500} height={500} />
                                    <p className='text-[14px] font-normal pt-2'>{ProductData.title}</p>
                                    <h2 className='text-[20px] font-font2 font-normal'>₦ {ProductData.price}</h2>  
                                </div>
                        </Link>
                    )
                })}
            </div>
            <div className='flex justify-end items-center mt-14'>
                <button onClick={handlePrevious} disabled={currentPage === 1} className=' flex items-center gap-x-3 px-4 py-2 bg-none text-[#757575] rounded-l'>
                <IoIosArrowRoundBack />
                Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(index + 1)} 
                        className={`px-4 py-2 gap-4 ${currentPage === index + 1 ? 'bg-black text-white rounded-lg' : 'bg-none text-black'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={handleNext} disabled={currentPage === totalPages} className=' flex items-center gap-x-3 px-4 py-2 bg-none text-[#1E1E1E] rounded-r'>
                    Next <IoIosArrowRoundForward />
                </button>
            </div>
            <div>
                <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-10 transition-transform duration-300 ${isFilterVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-4">
                        <div className='flex items-center justify-between border-b-2 py-3 pb-4'>
                            <h2 className="font-medium text-[16px]">FILTERS</h2>
                            <MdOutlineCancel className=' cursor-pointer' size={30} onClick={toggleFilter} />
                        </div>

                        <div className="mt-4 border-b-2 py-3 pb-7">
                        <label className="block mb-2">CATEGORY</label>
                            <select className="w-full">
                                <option value="all">CATEGORY</option>
                                <option value="all">KAFTAN</option>
                                <option value="adire">SUIT</option>
                                <option value="other">GOWN</option>
                                <option value="other">ADIRE</option>
                            </select>
                        </div>
                        <div className="mt-4 border-b-2 py-3 pb-7">
                            <label className="block mb-2 text-left">SIZE</label>
                            <div className='flex items-center justify-between'>
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button 
                                        key={size} 
                                        className={`p-2 px-4 border rounded ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F7F7F7] hover:bg-black hover:text-white'}`} 
                                        onClick={() => setSelectedSize(size)} // Update selected size
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>   
                        </div>
                        <div className="mt-4 border-b-2 py-3 pb-7">
                            <label className="block mb-2 text-left">COLOR</label>
                            <div className="flex space-x-2">
                                {colors.map((color) => (
                                    <button 
                                        key={color} 
                                        onClick={() => setSelectedColor(color)} // Update selected color
                                        className={`w-8 h-8 rounded-full  border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`} 
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-left">PRICE</label>
                            <div className='flex items-center justify-between'>
                                <p>₦{priceRange}</p>
                                <p>₦ 150,000</p>
                            </div>                           
                             <input type="range" min="50000" max="150000" value={priceRange} onChange={handlePriceChange} className="w-full border-red-400" />
                        </div>
                        
                        <div className="flex items-center justify-between mt-8">
                            <button 
                                onClick={handleClearAll} // Clear all selections
                                className="px-4 py-3 bg-[#EDEDED] text-black"
                            >
                                CLEAR ALL
                            </button>
                            <button 
                                onClick={toggleFilter} // Replace with your logic to view results
                                className="px-4 py-3 bg-black text-white"
                            >
                                VIEW RESULTS
                            </button>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category;