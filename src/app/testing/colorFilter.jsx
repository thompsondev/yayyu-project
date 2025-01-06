import React from 'react'

const colors = ['#EF4646', '#464BEF', '#EFB946', '#46CDEF'];


const colorFilter = () => {
    const [selectedColor, setSelectedColor] = useState('#000000'); 


  return (
    <div>
      <label className="block mb-2 text-left">COLOR</label>
                            <div className="flex space-x-2">
                                {colors.map((color) => (
                                    <button 
                                        key={color} 
                                        onClick={() => setSelectedColor(color)} // Update selected color
                                        className={`w-8 h-8 rounded-full  border-2 ${selectedColor === color ? 'border-black' : 'border-transparent'}`} 
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
    </div>
  )
}

export default colorFilter