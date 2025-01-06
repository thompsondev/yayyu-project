"use client"


import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import Link from 'next/link'; 
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import ProductImage from "../../app/assets/AdireImage.png"
import { MdDeleteForever } from "react-icons/md";
import searchFilter from "../../app/components/searchFilter"
import { useCart } from "../components/cartContext"
import CartModal from './CartModal';







const navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false); // New state for dropdown
    const [isMobileShopDropdownOpen, setIsMobileShopDropdownOpen] = useState(false); // New state for mobile dropdown
    const [isWishlistOpen, setIsWishlistOpen] = useState(false)
    const [isCartItemsOpen, setIsCartItemsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [count, setCount] = useState(1);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "The Adire Attire",
            price: 150000,
            image: ProductImage,
            
        },
        {
            id: 2,
            name: "The Adire Attire",
            price: 800000,
            image: ProductImage,
            
        },
        {
            id: 3,
            name: "The Adire Attire",
            price: 2000000,
            image: ProductImage,
            
        },
        {
            id: 4,
            name: "The Adire Attire",
            price: 500000,
            image: ProductImage,
            
        },
        {
            id: 5,
            name: "The Adire Attire",
            price: 400000,
            image: ProductImage,
            
        },
    ])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsAccountDropdownOpen(false)
    };

    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };
    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen); 
    };
    const toggleMobileShopDropdown = () => {
        setIsMobileShopDropdownOpen(!isMobileShopDropdownOpen); 
    };
    const toggleWishlist = () => {
        setIsWishlistOpen(!isWishlistOpen);
    }
    const toggleCartItems = () => {
        setIsCartItemsOpen(!isCartItemsOpen);
    }
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    }

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) { 
            setCount(count - 1);
        }
    };

    const deleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const { cart } = useCart();

    const toggleCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
    };


  return (
    <div className='sticky top-0 z-10 bg-white py-[20px] shadow-sm text-black'>
        <div className='max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    {isMobileMenuOpen ? (
                        <MdOutlineCancel className='lg:hidden sm:block cursor-pointer' size={30} onClick={toggleMobileMenu} />
                    ) : (
                        <IoMenu className='lg:hidden sm:block cursor-pointer' size={30} onClick={toggleMobileMenu} />
                    )}

                    <ul className='sm:hidden lg:flex items-center justify-center gap-x-5'>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/about">ABOUT US</Link></li>
                        <li className='flex items-center gap-x-3' onClick={toggleShopDropdown}>SHOP <MdOutlineKeyboardArrowDown /></li>
                            {isShopDropdownOpen && ( 
                                <div className='absolute bg-white shadow-lg mt-[140px] ml-[100px] border-t-4 border-[#FCBA41]'>
                                    <ul className='flex flex-col gap-y-2 p-5 pr-[70px] '>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4'><Link href="/shop/collection">COLLECTION</Link></li>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4'><Link href="/shop/category">CATEGORY</Link></li>
                                    </ul>
                                </div>
                            )}
                        <li><Link href="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div className=''>
                    <Image src={logo} alt='logo' />
                </div>
                <div className='flex items-center justify-center gap-x-5'>
                    <IoPersonOutline className='sm:hidden lg:block' size={26} onClick={toggleAccountDropdown}/>
                    {isAccountDropdownOpen && ( 
                                <div className='absolute bg-white shadow-lg mt-[140px] mr-[100px] border-t-4 border-[#FCBA41]'>
                                    <ul className='flex flex-col gap-y-2 p-5 pr-[70px] '>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4' onClick={toggleAccountDropdown}><Link href="/signup">SIGN UP</Link></li>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4'onClick={toggleAccountDropdown}><Link href="/login">LOGIN</Link></li>
                                    </ul>
                                </div>
                            )}
                    <CiHeart className='sm:hidden lg:block' size={26} onClick={toggleWishlist}/>
                    {isWishlistOpen && ( 
                                <div className='absolute top-20 bg-white shadow-lg mt-[px] mr-[100px] border-t-4 border-[#FCBA41] z-10 w-[350px] h-[550px]'>
                                    <div className='px-4 py-2 flex justify-end'>
                                        <MdOutlineCancel size={22} onClick={toggleWishlist} />
                                    </div>
                                    <div className='flex flex-col justify-between gap-y-32'>
                                        <ul className='flex flex-col gap-y-2 p-5'>
                                            <li className='pb-4 border-b-2'>
                                                <div className=' flex gap-4 items-center'>
                                                    <Image src={ProductImage} alt='image' className='w-[115px] h-[110px] border-2 rounded-lg'/>
                                                    <p className='font-medium text-[12px]'>The Adire Attire <br />with colour variaties</p>
                                                </div>
                                            </li>
                                            <li className='pb-4 border-b-2'>
                                                <div className=' flex gap-4 items-center'>
                                                    <Image src={ProductImage} alt='image' className='w-[115px] h-[110px] border-2 rounded-lg'/>
                                                    <p className='font-medium text-[12px]'>The Adire Attire <br />with colour variaties</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <button className='bg-black text-white text-[14px] font-normal py-4 px-10 ml-4 w-fit' onClick={toggleWishlist}>CANCLE ALL</button>
                                    </div>
                                </div>
                            )}
                    <CiSearch className='sm:hidden lg:block' size={26} onClick={toggleSearch}/>
                    {isSearchOpen && ( 
                        
                            <div className='absolute top-20 right-0 left-0 bg-white shadow-lg border-t-4 border-[#FCBA41] z-10 w-[100%] h-[100px]  py-4 px-4'>
                                        
                                        <div className='flex flex-col justify-between  bg-white'>
                                        <searchFilter/>
                                            <h1>
                                                testing
                                            </h1>
                                        </div>
                                    </div>
                    
                                
                            )}


                    <div className='flex items-center relative' onClick={toggleCartModal}>
                        <BsBag size={26} />
                        <p className='bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-[8px] text-white absolute -top-1 -right-1'>{cart.length}</p>
                    </div>
                    <CartModal isOpen={isCartModalOpen} onClose={toggleCartModal}/>
                    {/* {isCartItemsOpen && ( 
                                <div className='absolute lg:top-20 sm:top-0 sm:right-0 sm-left-0 sm:bottom-0 bg-white shadow-lg  lg:right-0 sm:mx-auto border-t-4 border-[#FCBA41] z-10 lg:w-[350px] sm:w-[100%] h-screen  py-4 px-4'>
                                        
                                    <div className='overflow-scroll flex flex-col justify-between lg:h-[500px] sm:h-[500px] bg-white'>
                                        <div>
                                            <div className=' py-5 flex items-center justify-between'>
                                                <p className='font-normal text-[14px]'>Item added in your bag ( 1 ) </p>
                                                <MdOutlineCancel size={22} onClick={toggleCartItems} />
                                            </div>
                                            <ul className='flex flex-col gap-y-2'>
                                                {cartItems.map(item => (
                                                    <li  key={item.id} className='pb-4 border-b-2'>
                                                        <div className=' flex gap-4 items-start justify-between'>
                                                            <div className='flex gap-3'>
                                                                <Image src={item.image} alt='image' className='w-[100px] h-[110px] border-2 rounded-lg'/>
                                                                <div>
                                                                    <p className='font-medium text-[12px]'>{item.name}<br />with colour variaties</p>
                                                                    <p className='font-font2 text-[18px] font-normal'>₦ {item.price}</p>
                                                                    <div className='flex items-center mt-4'>
                                                                        <button onClick={decrementCount} className='bg-gray-200 px-2 py-1'>-</button>
                                                                        <span className='px-2 py-1 bg-gray-200 '>{count}</span>
                                                                        <button onClick={incrementCount} className='bg-gray-200 px-2 py-1'>+</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <button onClick={() => deleteItem(item.id)}>  
                                                                <MdDeleteForever size={20} />
                                                            </button>
                                                        </div>
                                                    </li>

                                                ))}
                                                
                                            </ul>
                                        </div>
                                        <div className='text-center'>
                                            <p className='underline text-[20px] font-normal'>Continue Shopping</p>
                                            <div className='flex gap-4 mt-3 w-full'>
                                                <button className='bg-black text-white text-[12px] font-normal py-4 px-10   w-full' onClick={toggleCartItems}>CANCLE ALL</button>
                                                <button className='bg-gray-200 text-black text-[12px] font-normal py-4 px-10 w-full' onClick={toggleCartItems}>VIEW BAG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )} */}


                </div>
            </div>
                {isMobileMenuOpen && (
                    <div className=' absolute top-0 left-0 right-0 bg-white text-black shadow-lg px-[30px] pb-[30px] mt-5 h-screen'>
                        <div className='flex items-center justify-between py-7'>
                        <MdOutlineCancel className='lg:hidden sm:block cursor-pointer' size={30} onClick={toggleMobileMenu} />
                        <IoPersonOutline className='sm:block lg:hidden' size={26} onClick={toggleAccountDropdown}/>
                        {isAccountDropdownOpen && ( 
                                <div className=' z-10 absolute bg-white shadow-lg mt-[140px] ml-[px] left-[320px]  border-t-4 border-[#FCBA41]'>
                                    <ul className='flex flex-col gap-y-2 p-5 pr-[70px] '>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4' onClick={toggleMobileMenu} ><Link href="/signup">SIGN UP</Link></li>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4' onClick={toggleMobileMenu}><Link href="/login">LOGIN</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='relative pb-7'>
                        <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md p-2 w-full" />
                        <CiSearch className="absolute right-3 top-2.5 text-gray-500" size={20} />

                        </div>
                        <ul className='flex flex-col gap-y-[20px] text-center pb-10'>
                            <li><Link href="/" onClick={toggleMobileMenu} >HOME</Link></li>
                            <li><Link href="/about" onClick={toggleMobileMenu} >ABOUT US</Link></li>
                            <li className='flex items-center gap-x-3 justify-center' onClick={toggleMobileShopDropdown}>SHOP <MdOutlineKeyboardArrowDown /></li>
                            {isMobileShopDropdownOpen && ( 
                                <div className='flex flex-col gap-y-2 pl-5 items-center justify-center'>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4 '><Link href="/shop/collection" onClick={toggleMobileMenu} >COLLECTION</Link></li>
                                        <li className='hover:border-[#FCBA41] hover:border-b-4 '><Link href="/shop/category" onClick={toggleMobileMenu} >CATEGORY</Link></li>
                                </div>
                             )}
                            <li><Link href="/contact" onClick={toggleMobileMenu} >CONTACT</Link></li>
                            <li><Link href="/contact" onClick={toggleMobileMenu} >YOUR WISHLISTS</Link></li>
                        </ul>
                        <div>
                            <div className='flex gap-x-3  text-black items-center justify-center'>
                                <FaFacebook size={30} />
                                <FaSquareInstagram size={30} />
                                <AiFillTikTok size={30} />
                                <FaSquareXTwitter size={30} />
                                <ImLinkedin size={30} />
                            </div>
                        </div>

                    </div>
                 )}

        </div> 
    </div>
  )
}

export default navbar