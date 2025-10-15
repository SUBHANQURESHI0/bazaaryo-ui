"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar' // Remember to style this for a dark theme too!
import { Bell, Home, ShoppingCart } from 'lucide-react'

const Navbar = () => {
    return (
        // --- KEY CHANGES HERE ---
        // 1. Made the navbar fixed and semi-transparent with a backdrop blur.
        // 2. Added padding (px-6 py-3) for spacing.
        // 3. Changed the border to be a subtle white with low opacity.
        // 4. Set the default text color to white.
        <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-white/10 bg-slate-900/70 backdrop-blur-sm px-6 py-3 text-white'>
            
            {/* Left Side */}
            <Link href="/" className='flex items-center gap-2'> {/* Added gap-2 for spacing */}
                <Image
                    src="/logo.png" // This is your teal/orange logo
                    alt='Bazaaryo'
                    width={100}
                    height={100}
                    className='w-7 md:w-8 h-auto' // Slightly adjusted size for balance
                />
                <p className='hidden md:block text-lg font-medium tracking-wider'>BAZAARYO.</p>
            </Link>

            {/* Right Side */}
            <div className='flex items-center gap-5 md:gap-6'> {/* Adjusted gap */}
                
                {/* IMPORTANT: Your SearchBar component will also need styling for a dark background */}
                <SearchBar/>

                <Link href="/" className='hidden sm:block'> {/* Hide on very small screens for space */}
                    {/* --- KEY CHANGES HERE --- */}
                    {/* 1. Changed icon color to a light gray. */}
                    {/* 2. Added a hover effect to make them brighter. */}
                    <Home className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
                </Link>
                
                <button className='hidden sm:block relative'> {/* Hide on very small screens */}
                    <Bell className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
                    {/* Optional: Add a notification dot */}
                    {/* <span className='absolute -top-1 -right-1 flex h-2 w-2'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-orange-500'></span>
                    </span> */}
                </button>

                <Link href="/cart">
                    <ShoppingCart className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
                </Link>

                {/* --- KEY CHANGES HERE --- */}
                {/* 1. Styled the link to look like a "ghost" button. */}
                <Link href="/login" className='text-sm font-medium border border-white/50 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors'>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Navbar