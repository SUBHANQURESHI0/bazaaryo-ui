"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPinterestP,
    FaTiktok,
    FaSnapchatGhost,
} from "react-icons/fa";

export default function Footer() {
    return (
        // --- KEY CHANGES HERE ---
        // 1. Swapped bg-neutral-900 for bg-slate-900 for consistency.
        // 2. Kept the orange top border as a great brand accent.
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-orange-500">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {/* Logo & About */}
                <div className="md:col-span-1">
                    <Link href="/">
                        <Image
                            src="/fullLogo.png" // Make sure this logo is a version with a transparent background
                            alt="Bazaaryo Logo"
                            width={180}
                            height={60}
                            priority
                            className="object-contain mb-4"
                        />
                    </Link>
                    <p className="text-sm text-slate-400">
                        Everything you need, all in one place. Shop trusted brands with fast delivery.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    {/* --- KEY CHANGES HERE --- */}
                    {/* 1. Made headings white and uppercase for emphasis. */}
                    <h3 className="font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {/* 2. Styled links with a hover effect using the brand's orange color. */}
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Home</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Smart Watches</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Ear Buds</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Men's Watches</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Women's Watches</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Blogs</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-white mb-4 tracking-wider uppercase">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Track Your Order</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Warranty</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Shipping Details</Link></li>
                        <li><Link href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Contact + Socials */}
                <div>
                    <h3 className="font-semibold text-white mb-4 tracking-wider uppercase">Follow Us</h3>
                    <div className="flex flex-wrap gap-3">
                        {/* --- KEY CHANGES HERE --- */}
                        {/* 1. Updated social icon styles for a dark theme. */}
                        {/* 2. On hover, the background turns orange and the icon turns white. */}
                        <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaFacebookF size={16} />
                        </a>
                        <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaTwitter size={16} />
                        </a>
                        <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaInstagram size={16} />
                        </a>
                        <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaYoutube size={16} />
                        </a>
                         <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaTiktok size={16} />
                        </a>
                         <a href="#" className="bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-white w-9 h-9 flex items-center justify-center rounded-full transition-colors">
                            <FaLinkedinIn size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* --- KEY CHANGES HERE --- */}
            {/* 1. Changed border and text color to fit the dark theme. */}
            <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-400">
                <p>
                    Bazaaryo.co © {new Date().getFullYear()} Bazaaryo. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}