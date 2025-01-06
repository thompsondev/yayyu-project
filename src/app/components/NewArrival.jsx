import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductDatas from '../../app/components/ProductDatas';

const NewArrival = () => {
  console.log('ProductDatas:', ProductDatas);

  return (
    <div className="max-w-full-md mx-auto md:px-24 max-w-full-sm sm:px-6 max-w-full-lg lg:px-32">
      <h3 className="text-[24px] font-normal">NEW ARRIVAL</h3>
      <div className="text-center">
        <div className="grid lg:grid-cols-4 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {ProductDatas.map((Product) => (
            <Link key={Product.id} href="/shop/product/">
              <div className="flex flex-col items-center justify-center text-center">
                <Image
                  src={Product.image || '/default-image.png'} // Use default if image is missing
                  alt={Product.title}
                  width={200}
                  height={400}
                />
                <p className="text-[14px] font-normal pt-2">{Product.title}</p>
                <h2 className="text-[20px] font-font2 font-normal">₦ {Product.price}</h2>
              </div>
            </Link>
          ))}
        </div>
        <button className="text-white text-[14px] p-[20px] px-24 bg-black font-normal hover:bg-[#FCBA41] cursor-pointer mt-10">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
