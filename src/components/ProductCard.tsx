"use client"

import { ProductType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ProductCard = ({ product }: { product: ProductType }) => {

  // Check if size or color arrays exist and have elements.
  // We now explicitly check if they are NOT undefined and have length > 0.
  const hasSizes = product.sizes && product.sizes.length > 0;
  const hasColors = product.colors && product.colors.length > 0;

  const [productTypes, setProductTypes] = useState({
    // Safely set initial state: use the first item if available, otherwise undefined.
    color: hasColors ? product.colors![0] : undefined, // Use ! to assert non-null/undefined access after the check
    size: hasSizes ? product.sizes![0] : undefined
  })

  // The logic for handleProductType remains the same
  const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
      setProductTypes(prev=>({
        ...prev,
        [type] : value,
      }))
  }
  
  // Conditionally set the image source
  // If colors exist AND a color is selected, use the color-keyed image.
  // Otherwise, fallback to the first key in product.images.
  const imageSource = (hasColors && productTypes.color && product.images[productTypes.color])
    ? product.images[productTypes.color] 
    : product.images[Object.keys(product.images)[0]]; 

  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      {/* IMAGE */}
      <Link href={`products/${product.id}`}>
        <div className='relative aspect-[2/3]'>
          <Image 
            src={imageSource} 
            alt={product.name}
            fill 
            className='object-cover hover:scale-105 transition-all duration-300' 
          />
        </div>
      </Link>
      {/* Product Detail */}
      <div className='flex flex-col gap-4 p-4 mb-4'>
        <h1 className='font-medium'>{product.name}</h1>
        <p className='text-sm text-gray-500'>{product.shortDescription}</p>
        
        {/* Product Types - Only show this section if there are sizes OR colors */}
        {(hasSizes || hasColors) && (
          <div className='flex items-center gap-4 text-xs'>
            {/* SIZE */}
            {hasSizes && (
              <div className='flex flex-col gap-1'>
                <span className='text-gray-500'>Size</span>
                <select
                  name='size'
                  id='size'
                  className='ring ring-gray-300 rounded-md px-2 py-1'
                  // The initial value is set by React's state (which is the first size)
                  onChange={e=>handleProductType({type:"size",value:e.target.value})}
                  >
                  {/* Since hasSizes is true, product.sizes is guaranteed to be a string[] */}
                  {product.sizes!.map(size => (
                    <option key={size} value={size}>{size.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            )}
            
            {/* Colour */}
            {hasColors && (
              <div className='flex flex-col gap-1'>
                <span className='text-gray-500'>Color</span>
                <div className='flex items-center gap-2'>
                  {/* Since hasColors is true, product.colors is guaranteed to be a string[] */}
                  {product.colors!.map(color => (
                    <div className={`cursor-pointer border-1 
                      ${productTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} 
                    key={color} onClick={()=>handleProductType({type:"color", value:color})}>
                      <div className='w-[14px] h-[14px] rounded-full'
                        style={{ backgroundColor: color }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* PRICE AND ADD TO CART */}
        <div className='flex items-center justify-between'>
          <p className='font-medium'>Rs.{product.price.toFixed(2)}</p>
          <button className='ring-1 ring-gray-200 shadow-lg
            rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black 
            transition-all duration-300 flex items-center gap-2'>
            <ShoppingCart className='w-4 h-4' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard