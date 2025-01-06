import React from 'react';
import { FaStar } from "react-icons/fa";


const StarRating = ({ rating }) => {
  return (
    <div className='flex gap-x-2'>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'text-black text-[25px]' : 'text-gray-300 text-[25px]'}>
          <FaStar />
        </span>
      ))}
    </div>
  );
};

export default StarRating; 