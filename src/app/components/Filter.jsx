"use client"

import React, { useState } from 'react';

const Filter = () => {

    const [isFilterVisible, setIsFilterVisible] = useState(false); // State for filter visibility

    const toggleFilter = () => {
        setIsFilterVisible(!isFilterVisible); // Toggle filter visibility
      };

  return (
    <div>
        <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ${isFilterVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4">
          <h2 className="font-bold text-lg">Filter Options</h2>
          <div className="mt-4">
            <label className="block mb-2">Price Range:</label>
            <input type="range" min="0" max="1000000" className="w-full" />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Category:</label>
            <select className="w-full">
              <option value="all">All</option>
              <option value="adire">Adire</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={toggleFilter}
          >
            Apply Filters
          </button>
        </div>
        </div>

    </div>
  )
}

export default Filter