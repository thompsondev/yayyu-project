import React, { useState } from 'react';
import { useCart } from './cartContext';
import { MdOutlineCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";



const CartModal = ({ isOpen, onClose }) => {
    const { cart } = useCart();
    const [count, setCount] = useState(1);
    

    if (!isOpen) return null;

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) { 
            setCount(count - 1);
        }
    };

  return (
    <div className='absolute lg:top-20 sm:top-0 sm:right-0 sm-left-0 sm:bottom-0 bg-white shadow-lg  lg:right-0 sm:mx-auto border-t-4 border-[#FCBA41] z-10 lg:w-[350px] sm:w-[100%] h-screen  py-4 px-4'>
                                            
                                        <div className='overflow-scroll flex flex-col justify-between lg:h-[500px] sm:h-[500px] bg-white'>
                                            <div>
                                                <div className=' py-5 flex items-center justify-between'>
                                                    <p className='font-normal text-[14px]'>Item added in your bag ( {cart.lenght} ) </p>
                                                    <MdOutlineCancel size={22} />
                                                </div>
                                                {cart.lenght == 0 ? (
                                                    <p>Your cart is empty.</p>
                                                ) : (
                                                    <ul className='flex flex-col gap-y-2'>
                                                        {cart.map((item, index) => (
                                                            <li  key={index} className='pb-4 border-b-2'>
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
                                                )}
                                                
                                            </div>
                                            <div className='text-center'>
                                                <p className='underline text-[20px] font-normal'>Continue Shopping</p>
                                                <div className='flex gap-4 mt-3 w-full'>
                                                    <button className='bg-black text-white text-[12px] font-normal py-4 px-10   w-full' >CANCLE ALL</button>
                                                    <button className='bg-gray-200 text-black text-[12px] font-normal py-4 px-10 w-full' >VIEW BAG</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  )
}

export default CartModal