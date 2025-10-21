import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar' // Remember to style this for a dark theme too!
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-white/10 bg-slate-900/70 backdrop-blur-sm px-6 py-3 text-white'>
            
            {/* Left Side */}
            <Link href="/" className='flex items-center gap-2'> 
                <Image
                    src="/logo.png" 
                    alt='Bazaaryo'
                    width={100}
                    height={100}
                    className='w-7 md:w-8 h-auto' 
                />
                <p className='hidden md:block text-lg font-medium tracking-wider'>BAZAARYO.</p>
            </Link>

            {/* Right Side */}
            <div className='flex items-center gap-5 md:gap-6'> 
                <SearchBar/>
                <Link href="/" className='hidden sm:block'>
                    <Home className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
                </Link>
                
                <button className='hidden sm:block relative'> 
                    <Bell className='w-5 h-5 text-slate-300 hover:text-white transition-colors'/>
                </button>

               
                  <ShoppingCartIcon/>
              
                <Link href="/login" className='text-sm font-medium border border-white/50 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors'>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Navbar