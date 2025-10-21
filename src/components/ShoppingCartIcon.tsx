"use client "

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  return (
   <Link href="/cart" className='relative'>
    <ShoppingCart className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
    <span className='absolute -top-3 -right-3 bg-[#00B4B6]
     text-gray-600 rounded-full w-4 h-4 flex items-center justify-center 
     text-xs font-medium'>0</span>
   </Link>
  )
}

export default ShoppingCartIcon