import React, { useState } from 'react';
import Image from 'next/image';
import ProductImage from "../../app/assets/AdireImage.png"

const products = [
    {
        id: 1,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 2,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 3,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 4,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 5,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 6,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 7,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
    {
        id: 8,
        image: ProductImage,
        title: "THE ADIRE ATTIRE",
        price: "150,000",
    },
]

const searchFilter = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <div>
         <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='mt-2'>
                            {filteredProducts.length > 0 ? (
                                <ul>
                                    {filteredProducts.map(product => (
                                        <li key={product.id} className='py-1'>{product.title}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No results found</p>
                            )}
                        </div>

    </div>
  )
}

export default searchFilter