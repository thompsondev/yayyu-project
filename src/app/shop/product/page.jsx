
"use client"



import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ProductDatas from '../../components/ProductDatas'
import headImage from "../../assets/singleProductPage.png"
import ProductImage from "../../assets/AdireImage.png"
import StarRating from "../../components/StarRating"
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiCreditCard1 } from "react-icons/ci";
import Link from 'next/link';
import { useCart } from "../../components/cartContext"






const Products = [
  {
      id: 1,
      image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "200,000",
  },
  {
      id: 2,
      image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "500,000",
  },
  {
      id: 3,
      image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "350,000",
  },
  {
      id: 4,
      image: ProductImage,
      title: "THE ADIRE ATTIRE",
      price: "150,000",
  }
]

const colors = ['#EF4646', '#464BEF', '#EFB946', '#46CDEF'];


const SingleProduct = ({ ProductData }) => {

  const router = useRouter();
  const { id } = router.query;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#000000'); 
  const [activeSection, setActiveSection] = useState('description');
  const {addToCart} = useCart()

  // Handle loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If product is not found
  if (!ProductData) {
    return <div>Product not found</div>;
  }



  const productRating = 4;

  return (
    <div>
      <div className='w-full'>
        <Image src={headImage} alt='category' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
      </div> 
      <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
        <div className=' container mt-20  flex items-top justify-start lg:gap-x-8 sm:gap-y-5  lg:flex-row sm:flex-col'>
          <div className='lg:w-1/2 sm:w-full'>
            <Image src={ProductData.image || "/default-image.jpg"} alt='product' className='border-2 lg:w-[500px] sm:w-screen lg:h-[600px] sm:h-[300px] object-contain'/>
            <div className='flex  mt-3 gap-x-3'>
              <Image src={ProductData.image || "/default-image.jpg"} alt='product' className='border-2 w-[159px] h-[80px] object-contain'/>
              <Image src={ProductData.image || "/default-image.jpg"} alt='product' className='border-2 w-[159px] h-[80px] object-contain'/>
              <Image src={ProductData.image || "/default-image.jpg"} alt='product' className='border-2 w-[159px] h-[80px] object-contain'/>
            </div>
          </div>
          <div className='lg:w-1/2 sm:w-full'>
            <h1 className='text-[32px] font-bold'>{ProductData.title}</h1>
            <div className='flex items-center gap-x-3 mt-3'>
              <StarRating rating={productRating} />
              <p className='text-[12px] font-medium'>29 Reviews</p>
            </div>
            <h1 className='font-font2 text-[45px] font-normal mt-2'>₦ {ProductData.price}</h1>
            <p className='font-medium text-[14px] border-b-2 py-2'>
            Embrace the vibrant beauty of African culture with our stunning African 
            print design gown. This eye-catching piece features a bold, colorful 
            pattern that celebrates traditional artistry while offering a modern silhouette.
            </p>
            <div className="mt-4 border-b-2  pb-5">
                            <label className="">SIZE</label>
                            <div className='flex items-center justify-start gap-x-3 mt-3'>
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
            <div className="mt-4 border-b-2 pb-5">
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

             <div className='flex gap-x-2 items-center w-full justify-between mt-4'>
              <button className='py-4 px-7 bg-[#F7F7F7]'>- 1 +</button>
              <button className='bg-black text-[14px] text-white w-full py-4 flex items-center justify-center gap-x-2 hover:bg-[#EFB946] flex-1'
              onClick={() => addToCart(
                { id: ProductData.id, 
                  title: ProductData.title, 
                  price: ProductData.price, 
                  image: ProductData.image, 
                })}>
                  ADD TO BAG <HiOutlineShoppingBag />              </button>
              <button className='py-5 px-7 bg-[#F7F7F7]'><CiHeart /></button>
             </div>
             <div className='mt-2'>
              <Link href="/shop/checkout">
                <button className='bg-[#F7F7F7] hover:bg-black hover:text-white w-full text-[14px] py-4 flex items-center gap-x-2 justify-center border-black border-2'>BUY NOW <CiCreditCard1 /></button>
              </Link>
             </div>
             <div className='mt-3'>
                <div className='flex items-center gap-x-5'>
                    <div onClick={() => setActiveSection('description')} className={`cursor-pointer ${activeSection === 'description' ? 'font-bold  border-b-2 border-black py-3' : 'text-[#F7F7F7] border-b-2 border-[#F7F7F7] py-3'}`}>
                      <p className='font-medium text-[16px]  w-fit'>Description</p>
                    </div>
                    <div onClick={() => setActiveSection('details')} className={`cursor-pointer ${activeSection === 'details' ? 'font-bold border-b-2 border-black py-3 ' : 'text-[#F7F7F7] border-b-2 border-[#F7F7F7] py-3'}`}>
                      <p className='font-medium text-[16px]'>Details</p>
                    </div>
                    <div onClick={() => setActiveSection('review')} className={`cursor-pointer ${activeSection === 'review' ? 'font-bold border-b-2 border-black py-3' : 'text-[#F7F7F7] border-b-2 border-[#F7F7F7] py-3'}`}>
                      <p className='font-medium text-[16px]'>Review</p>
                   </div>  
                </div>
                <div className='mt-4'>
                    {activeSection === 'description' && (
                      <p className='font-medium text-[14px]'>Embrace the vibrant beauty of African culture with our stunning 
                        African print design gown. This eye-catching piece features a bold,
                        colorful pattern that celebrates traditional artistry while offering 
                        a modern silhouette.
                      </p>
                    )}
                    {activeSection === 'details' && (
                      <p className='font-medium text-[14px]'>Here are the details of the product...</p>
                     )}
                     {activeSection === 'review' && (
                        <p className='font-medium text-[14px]'>User  reviews will be displayed here...</p>
                      )}
                </div>
             </div>
          </div>

        </div>
        <div className='mt-28'>
          <h2 className='font-medium text-[24px] text-center'>
            YOU MAY ALSO LIKE         
          </h2>
          <div className=''>
            <div className='grid lg:grid-cols-4 gap-10 mt-12 sm:grid-cols-2 md:grid-cols-3'>
                  {ProductDatas.map((Product) => {
                      return (
                          <Link key={Product.id} href={`/shop/product/${Product.id}`}>
                                  <div className='text-center'>
                                      <Image src={Product.image || "/default-image.jpg"} alt='newArrival'width={200} height={300} />
                                      <p className='text-[14px] font-normal pt-2'>{Product.title}</p>
                                      <h2 className='text-[20px] font-font2 font-normal'>₦ {Product.price}</h2>  
                                  </div>
                          </Link>
                      )
                  })}
              </div>

            </div>
        </div>

        <div>

        </div>
      </div> 
    </div>
  );
};


// export async function getStaticPaths() {
//   // Generate paths for each product based on their IDs
//   const paths = ProductDatas.map((ProductData) => ({
//     params: { id: ProductData.id.toString() },
//   }));

//   return { paths, fallback: false }; // Set fallback to true if you want to handle new products
// }
// console.log(paths);

// export async function getStaticProps({ params }) {
//   // Find the product by ID
//   const ProductData = ProductDatas.find((p) => p.id.toString() === params.id);

//   return {
//     props: {
//       ProductData: ProductData || null, // Return null if product is not found
//     },
//     revalidate: 10, // Revalidate the page every 10 seconds to keep data fresh
//   };
// }


export default SingleProduct