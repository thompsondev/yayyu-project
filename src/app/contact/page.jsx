import React from 'react'
import Image from 'next/image';
import headImage from "../assets/contact.png"

import AboutImage from "../assets/aboutimage.png"
import ProductCatalog from '../components/ProductCatalog';

const Contact = () => {

  // let imagesCopy = Array(8).fill({src:ProductCatalog})
  //   let pricesCopy = Array.from({length: 8}, (_ , i) => (i + 1) * 100)
  return (
    <div>
      <div className='w-full'>
        <Image src={headImage} alt='about' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>
      </div>

        <div className="max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32">
              
              <div className='mt-14 container'> 
                <div className='flex items-top gap-x-14 sm:flex-col lg:flex-row gap-y-5 '>
                  <div className='lg:w-1/2 sm:w-full'>
                    <form>
                        <div className='mb-3'>
                          <label htmlFor="" className='text-[14px] font-medium'>First name</label><br/>
                          <input type="text" placeholder='First name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='text-[14px] font-medium'>E-mail</label><br/>
                            <input type="email" placeholder='email' className='border-2 p-[10px] rounded-[4px] w-full'/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="" className='text-[14px] font-medium'>Enquiry</label><br/>
                            <textarea name="text" id="enquiry" className='border-2 p-[10px] rounded-[4px] w-full'></textarea>
                        </div>
                        <button className='bg-black hover:bg-[#FCBA41] text-white w-full py-4'>Send</button>

                    </form>
                  </div>
                  <div className='font-normal text-[20px] lg:w-1/2 sm:w-full sm:text-center lg:text-left'>
                    <p>Gbagada</p>
                    <p>+234 812 0000 0000</p>
                    <p>info@yayyulifestyle.com</p>
                  </div>

                </div>

                
              </div>
              {/* <ProductCatalog
              imagesCopy={images}
              pricesCopy={prices}/> */}

        </div>

    </div>
    
  )
}

export default Contact