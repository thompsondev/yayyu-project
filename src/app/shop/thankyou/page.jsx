"use client"


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ClipLoader } from 'react-spinners';
import ProductImage from "../../assets/AdireImage.png"


const Products = [
  {
      id: 1,
      Image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "200,000",
  },
  {
      id: 2,
      Image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "500,000",
  },
  {
      id: 3,
      Image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "350,000",
  },
  {
      id: 4,
      Image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "150,000",
  }
]

const ThankYou = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#FCBA41" loading={isLoading} size={60} />
      </div>
    );
  }
  return (
    <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
      <div className='mt-20'>
        <div className='text-center'>
          <h1 className='font-font2 text-[40px] font-normal'>Thank you for the order</h1>
          <p className='uppercase font-medium text-[20px] text-[#636060] mt-10'>your order numbers is #234556</p>
          <p className='font-medium text-[16px] text-[#636060]'>we will contact you to confirm your contatc information. <br />
              If you have any questions, please write to us at: <br />
              info@yayyulifestles.com
          </p>
          <Link  href="/" >
            <button className='text-white bg-black hover:bg-[#FCBA41] w-fit px-36 py-3 font-medium text-[16px] mt-10'>Go Back Home</button>
          </Link>
        </div>
        <div>
          <div className='flex items-center justify-between mt-32'>
            <h3 className='font-medium text-[25px]'>BEST SELLER</h3>
            <p className='font-medium text-[16px]'>See all</p>
          </div>
          <div>
          <div className='grid lg:grid-cols-4 gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3'>
                  {Products.map((Product, index) => {
                      return (
                            <Link key={index} href="./shop/product">
                                <div className='text-center'>
                                    {Product.Image ? (
                                        <Image src={Product.Image} alt='newArrival' />
                                    ) : (
                                        <div>No Image Available</div>
                                    )}
                                    <p className='text-[14px] font-normal pt-2'>{Product.title}</p>
                                    <h2 className='text-[20px] font-font2 font-normal'>₦ {Product.price}</h2>  
                                </div>
                            </Link>
                      )
                  })}
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ThankYou