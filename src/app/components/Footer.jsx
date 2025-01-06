import React from 'react'
import Image from 'next/image';
import logo from "../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";






const Footer = () => {
  return (
    <div className='mt-20 bg-[#EFEFEF]'>
      <div className="max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32">
      <div className='py-[50px]'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-y-14 items-top justify-center  '>
          <div>
            <Image src={logo} alt='logo'/>
          </div>
          <div className='flex gap-x-10 text-black'>
            <div>
              <h2 className='text-[16px] font-medium pb-3'>QUICK LINK</h2>
              <ul className='text-[14px] font-medium space-y-3'>
                <li>Home</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h2 className='text-[16px] font-medium pb-3'>LEGAL</h2>
              <ul className='text-[14px] font-medium space-y-3'>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Delivery Policy</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className='text-[16px] font-medium pb-3 text-black'>FOLLOW US ON</h2>
            <div className='flex gap-x-3  text-black'>
            <FaFacebook size={25} />
            <FaSquareInstagram size={25} />
            <AiFillTikTok size={25} />
            <FaSquareXTwitter size={25} />
            <ImLinkedin size={25} />
            </div>
          </div>
          <div>
          <h2 className='text-[16px] font-medium pb-3 text-black'>JOIN OUR COMMUNITY</h2>
          <div>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full p-4" />
              <button className='text-center w-full py-[15px] bg-black hover:bg-[#FCBA41] text-white mt-4'>Subscribe</button>
              <p className='font-medium text-[10px] mt-3 text-black'>Join the Yayyu community for exclusive access, special offers, and early notifications about our new collections!</p>
            </form>
          </div>
          </div>
        </div>
      </div>   
      </div>
      <div className='text-center py-6 border-t-2 text-black border-black w-full'>
        <p>Copyright © 2024 Yayyu LifeStyle</p>
      </div>
    </div>
  )
}

export default Footer