"use client"


import React, { useState } from 'react';
// import Link from 'next/link'; 

// import { useRouter } from 'next/router';
import Image from 'next/image';
import accountImage from "../../app/assets/account.png"
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { TbInbox } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import emptyCart from "../../app/assets/empty-cart 1.png"
import emptyWishList from "../../app/assets/wishlist 1.png"


const orderlist = () => {
  const [activeItem, setActiveItem] = useState('Order List'); 

  const handleItemClick = (item) => {
    setActiveItem(item); 
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Order List':
        return (
          <div className='flex flex-col items-center justify-center'>
            <Image src={emptyWishList} alt='' loading='lazy' />
            <p className='font-medium text-[16px] py-4'>You haven't placed any orders yet.</p>
            <button className='px-12 py-4 text-[14px] font-normal bg-black text-white'>CONTINUE SHOPPING</button>
          </div>
        );
      case 'Wish List':
        return (
            <div className='flex flex-col items-center justify-center'>
              <Image src={emptyCart} alt='' loading='lazy' />
              <p className='font-medium text-[16px] py-4'>Your wishlist id empty</p>
              <button className='px-12 py-4 text-[14px] font-normal bg-black text-white'>CONTINUE SHOPPING</button>
            </div>
          ); 
      case 'Inbox':
        return <p className='font-medium text-[16px] py-4'>You have no new messages.</p>;
      case 'Edit Account':
        return (
            <div className='w-[500px]'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>First Name</label><br/>
                        <input type="text" placeholder='First name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>Last Name</label><br/>
                        <input type="text" placeholder='Last name' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>E-mail</label><br/>
                        <input type="email" placeholder='email' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <button className='bg-black hover:bg-[#FCBA41] text-white w-full py-4'>Save changes</button>
                </form>
            </div>
        );
      case 'Change Password':
        return (
            <div className='w-[500px]'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>Current Password</label><br/>
                        <input type="password" placeholder='*****' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>New Password</label><br/>
                        <input type="password" placeholder='*****' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="" className='text-[14px] font-medium'>Comfirm New Password</label><br/>
                        <input type="password" placeholder='*****' className='border-2 p-[10px] rounded-[4px] w-full'/>
                    </div>
                    <button className='bg-black hover:bg-[#FCBA41] text-white w-full py-4'>Change password</button>
                </form>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='bg-[#F5F5F5]'>
        <div className='w-full '>
             <Image src={accountImage} alt='category' className='w-[100%] lg:h-auto sm:h-[100px] object-cover'/>   
        </div>
        <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32 '>
            <div className='mt-14 '>
                <div className='flex items-top justify-center gap-x-4 sm:flex-col lg:flex-row'>
                    <div className='bg-white h-[420px] lg:w-1/4 sm:w-full shadow-sm mb-14'>
                    <div className='flex flex-col justify-between gap-y-20'>
                    <div>

                    {/* <Link className='block' key={item} href={`account/order-list/${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}   
            </Link> */}
                        {['Order List', 'Wish List', 'Inbox', 'Edit Account', 'Change Password'].map((item) => (
                            <div
                            key={item}
                            className={`flex items-center gap-x-3 py-4 pl-4 hover:bg-[#E9E7E7] ${activeItem === item ? 'bg-[#E9E7E7] border-r-4 border-[#FCBA41]' : ''}`}
                            onClick={() => handleItemClick(item)}
                            >
                            
                            {item === 'Order List' && <PiShoppingCartSimpleDuotone size={20} />}
                            {item === 'Wish List' && <FaRegHeart size={20} />}
                            {item === 'Inbox' && <TbInbox size={20} />}
                            {item === 'Edit Account' && <FaUserEdit size={20} />}
                            {item === 'Change Password' && <RiLockPasswordLine size={20} />}
                            <p className='font-medium text-[16px]'>{item}</p>


                            </div>
                        ))}
                    </div>
                        <div>
                             <div className='flex items-center justify-center gap-x-3 py-4 pl-0 hover:bg-[#E9E7E7] hover:border-r-4 hover:border-[#FCBA41]'>
                                <MdLogout size={20} />

                                <p className='font-medium text-[16px]'>Logout</p>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className='bg-white h-[420px]  lg:w-3/4 sm:w-full shadow-sm p-10 flex items-center justify-center'>
                        {renderContent()}
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default orderlist