import React from 'react'
import Image from 'next/image';

const ProductCatalog = ({images, prices, title}) => {
    let imagesCopy = Array(12).fill("/_next/static/media/AdireImage.7a5332fb.png")
    let pricesCopy = Array.from({length: 12}, () => Math.floor(Math.random() * 150000) + 1)
  return (
    <div className='grid grid-cols-4 gap-4 container'>
        {imagesCopy.map((image, id) => (
            <div key={id} className='w-full text-center'>
                <Image 
                src={image.src} 
                alt={`images ${id + 1}`}
                width={300} height={300}
                className='object-cover'
                />
                <p className='text-[14px] font-normal pt-2'>{title}</p>
                <h2 className='text-[20px] font-font2 font-normal '>price: ${pricesCopy[id]}</h2> 
            </div>
        ))}

    </div>
  )
}

export default ProductCatalog