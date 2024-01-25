'use client'
import React from 'react'

function ProductForm() {
  return (
    
    
        <div className='w-full flex items-center justify-center mt-24'>
            
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-[80%]'>
                <div>
                    <label htmlFor="title" className='text-[20px]'>Title</label>
                    <input type="text" id='title' placeholder='Title' className='p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>
                <div>
                    <label htmlFor="title" className='text-[20px]'>Title</label>
                    <input type="text" id='title' placeholder='Title' className='p-2 w-full border-[1px]  border-gray-500 rounded-lg focus:outline-none focus:border-purple-800 '  />
                </div>
            </div>
    </div>
  )
}

export default ProductForm
