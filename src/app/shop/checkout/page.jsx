import Image from 'next/image'
import React from 'react'
import checkoutImage from "../../assets/checkoutImage.png"
import card from "../../assets/card.png"
import productImage from "../../assets/AdireImage.png"
import Link from 'next/link';


const checkout = () => {
  return (
    <div>
        <div>
          <Image src={checkoutImage} alt='checkout' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
        </div>
        <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
          <div className='flex lg:flex-row sm:flex-col-reverse justify-center '>
            <div className='lg:w-1/2 sm:w-full lg:px-10 sm:px-0  pt-20 lg:border-r-2 sm:border-none '>
             <div className='flex items-center justify-between'>
              <h1 className='text-[22px] font-bold'>Contact</h1>
              <p className='font-medium text-[14px] underline'>Login</p>
             </div>
             <input type="email" placeholder='email' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
             <div className='flex items-center mt-4'>
               <input type="checkbox" id="terms" className='mr-2 transform scale-150' />
               <label htmlFor="terms" className=' font-medium text-[12px] text-[#636060]'>Sign up for order updates, exclusive offers and news on WhatsApp and/or Email</label>
             </div>
             <div className='mt-6'>
              <h1 className='text-[22px] font-bold'>Delivery</h1>
              <select name="country" id="country" className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]'>
                <option value="Nigeria">Nigeria</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              <div className='flex gap-x-4'>
                <input type="text" placeholder='First name' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
                <input type="text" placeholder='Last name' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              </div>
              <input type="text" placeholder='Address' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              <input type="text" placeholder='Apartment' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              <input type="text" placeholder='City' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              <div className='flex gap-x-4'>
                <select name="state" id="state" className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]'>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Lagos">Lagos</option>
                </select>
                <input type="text" placeholder='Postal code ' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              </div>
              <input type="number" placeholder='Phone number' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
              <div className='flex items-center mt-4'>
               <input type="checkbox" id="terms" className='mr-2 transform scale-150' />
               <label htmlFor="terms" className=' font-medium text-[12px] text-[#636060]'>Sign up for order updates, exclusive offers and news on WhatsApp and/or Email</label>
             </div>
             <h1 className='text-[22px] font-bold mt-6'>Contact</h1>
             <input type="text" placeholder='Enter your shipping address ' className='py-3 w-full px-4 border-2 mt-3 rounded-[4px]' />
             <h1 className='text-[22px] font-bold mt-6'>Shipping method</h1>
              <div className='border-2  rounded-[4px] mt-4'>
                <div className='flex items-center justify-between border-b-2 px-5 py-2  hover:border-2 hover:border-[#FCBA41]'>
                  <div className='flex items-center gap-x-5'>
                    <div className='w-5 h-5 rounded-full border-4 border-black'></div>
                    <p className='font-medium text-[14px] text-[#636060]'>Standard ( within lagos, 3 - 7 work days )</p>
                  </div>
                  <h2 className='text-[20px] font-normal'>₦ 5000</h2>
                </div>
                <div className='flex items-center justify-between border-b-2 px-5 py-2  hover:border-2 hover:border-[#FCBA41]'>
                  <div className='flex items-center gap-x-5'>
                  <div className='w-5 h-5 rounded-full border-4 border-black'></div>
                  <p className='font-medium text-[14px] text-[#636060]'>Standard ( within lagos, 3 - 7 work days )</p>
                  </div>
                  <h2 className='text-[20px] font-normal'>₦ 10,000</h2>
                </div>
                <div className='flex items-center justify-between px-5 py-2  hover:border-2 hover:border-[#FCBA41]'>
                  <div className='flex items-center gap-x-5'>
                  <div className='w-5 h-5 rounded-full border-4 border-black'></div>
                  <p className='font-medium text-[14px] text-[#636060]'>Standard ( within lagos, 3 - 7 work days )</p>
                  </div>
                  <h2 className='text-[20px] font-normal'>₦ 15,000</h2>
                </div>
              </div>

              <div>
                <h1 className='text-[22px] font-bold mt-6'>Payment</h1>
                <p className=' font-medium text-[14px] text-[#636060]'>All transactions are secure and encrypted.</p>
              </div>
              <div className='bg-[#F7F7F7] rounded-[4px] mt-4'>
                <div className='flex items-center justify-between border-2 py-3 px-3 border-[#FCBA41] rounded-[4px]'>
                  <p className='text-[#636060] text-[14px] font-medium'>Credit card</p>
                  <Image src={card} alt='card'/>
                </div>
                <div className='bg-[#F7F7F7] rounded-[4px]  px-3 pb-3'>
                  <input type="text" placeholder='Card Number' className='py-3 bg-[#F7F7F7] w-full px-4 border-2 mt-3 rounded-[4px]' />
                  <div className='flex gap-x-3'>
                  <input type="text" placeholder='Expiration date (MM / YY)' className='py-3 bg-[#F7F7F7] w-full px-4 border-2 mt-3 rounded-[4px]' />
                  <input type="text" placeholder='Security code' className='py-3 bg-[#F7F7F7] w-full px-4 border-2 mt-3 rounded-[4px]' />
                  </div>
                  <input type="text" placeholder='Name on card' className='py-3 bg-[#F7F7F7] w-full px-4 border-2 mt-3 rounded-[4px]' />
                </div>
              </div>
                <div className='flex items-center mt-4'>
                  <input type="checkbox" id="terms" className='mr-2 transform scale-150' />
                  <label htmlFor="terms" className=' font-medium text-[12px] text-[#636060]'>Use shipping address as billing address</label>
                </div>
                <Link href="/shop/thankyou" >
                <button className='w-full bg-black hover:bg-[#FCBA41] text-white text-[24px] mt-5 py-2 rounded-[4px]'>PAY</button> 
                </Link>
             </div>

            </div>
            <div className=' lg:w-1/2 sm:w-full lg:px-10 sm:px-0 pt-20'>
            <div>
              <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-x-8'>
                  <div className='flex items-center relative'>
                  <Image src={productImage} alt='image'  width={75} height={50} className='rounded-[10px] border-2'/>
                  <p className='text-[14px] font-medium bg-[#666666] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-1 -right-1'>1</p>
                  </div>
                  <p className='font-medium text-[14px]'>The Adire Attire <br />with colour variaties</p>
                </div>
                <h3 className='font-normal text-[20px]'> ₦ 150,000.00</h3>
              </div>
              <div className=' flex items-center justify-between mt-5'>
                <div className='flex items-center gap-x-8'>
                  <div className='flex items-center relative'>
                  <Image src={productImage} alt='image'  width={75} height={50} className='rounded-[10px] border-2'/>
                  <p className='text-[14px] font-medium bg-[#666666] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-1 -right-1'>1</p>
                  </div>
                  <p className='font-medium text-[14px]'>The Adire Attire <br />with colour variaties</p>
                </div>
                <h3 className='font-normal text-[20px]'> ₦ 150,000.00</h3>
              </div>
              <div className='flex items-center justify-center gap-x-3 mt-6'>
              <input type="text" placeholder='Discount code or gift card' className='py-3 bg-[#F7F7F7] w-full px-4 border-2 rounded-[4px] flex-1' />
              <button className='py-3 bg-[#F7F7F7] border-2 rounded-[4px] px-4 text-[#636060] font-medium text-[14px]'>Apply</button>
              </div>

              <div className='flex items-center justify-between mt-10'>
                <p className='text-[#636060] text-[14px] font-medium'>Subtotal</p>
                <p className='font-normal text-[20px]'>₦ 150,000.00</p>
              </div>
              <div className='flex items-center justify-between mt-2'>
                <p className='text-[#636060] text-[14px] font-medium'>Shipping</p>
                <p className='font-normal text-[20px]'>₦ 5,000.00</p>
              </div>
              <div className='flex items-center justify-between mt-5'>
                <p className='text-black text-[21px] font-medium'>Total</p>
                <p className='font-normal text-[20px]'>₦ 155,000.00</p>
              </div>
            </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default checkout