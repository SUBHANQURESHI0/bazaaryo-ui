"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <header className="relative bg-gradient-to-br from-slate-900 to-sky-800 text-white overflow-hidden">
            {/* Main container with further reduced top padding */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-20 lg:pt-12 lg:pb-24 min-h-[72vh] lg:min-h-[78vh] grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: Content */}
                <motion.div
                    className="z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-[48px] sm:text-6xl lg:text-[72px] font-extrabold leading-tight tracking-tight mb-6">
                        Everything You Need,
                        <br />
                        <span className="inline-block">All in One Place.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
                        From electronics to bed sheets, crockery to accessories — shop trusted
                        brands, fast delivery, and easy returns.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-orange-600 font-semibold shadow-lg hover:scale-[1.02] transition"
                            href="#shop"
                        >
                            🛒 Shop Now
                        </a>

                        <a
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/70 text-white font-semibold hover:bg-white/10 transition"
                            href="#categories"
                        >
                            Browse Categories
                        </a>
                    </div>

                    {/* Promotional badges */}
                    <div className="mt-8 flex flex-wrap gap-3 items-center text-sm">
                        <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-xl">
                            <strong className="text-white">Free Shipping</strong>
                            <span className="opacity-80">over Rs.2,000</span>
                        </div>
                        <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-xl">
                            <strong className="text-white">COD</strong>
                            <span className="opacity-80">Available</span>
                        </div>
                        <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-xl">
                            <strong className="text-white">Easy Returns</strong>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Visual card-stack / product preview */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="grid grid-cols-2 gap-5 lg:gap-6">
                        {/* top-left card with full-bleed image */}
                        <div className="relative rounded-2xl bg-white/6 backdrop-blur-sm h-44 lg:h-56 shadow-[0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden">
                            <Image
                                src="/electronics.png"
                                alt="Electronics"
                                layout="fill"
                                objectFit="cover"
                            />
                            {/* <div className="absolute bottom-4 left-4 z-10 text-white font-semibold">
                                Electronics
                            </div> */}
                        </div>

                        {/* top-right card */}
                        <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-4 h-44 lg:h-56 shadow-[0_10px_30px_rgba(0,0,0,0.10)] flex items-end">
                            <Image
                                src="/homeappliances.png"
                                alt="Home & Kitchen"
                                layout="fill"
                                objectFit="cover"
                            />
                            {/* <div className="text-sm text-white/90">Home & Kitchen</div> */}
                        </div>
                        {/* bottom-left card */}
                        <div className="rounded-2xl bg-white/6 backdrop-blur-sm p-4 h-44 lg:h-56 shadow-[0_10px_30px_rgba(0,0,0,0.10)] relative overflow-hidden">
                            <Image
                                src="/bedsheets.png"
                                alt="BedSheets"
                                layout="fill"
                                objectFit="cover"
                            />
                            {/* <div className="ml-24 text-white/90">Bed Sheets</div> */}
                        </div>

                        {/* bottom-right card */}
                        <div className="rounded-2xl bg-white/5 backdrop-blur-sm p-4 h-44 lg:h-56 shadow-[0_10px_30px_rgba(0,0,0,0.10)] relative overflow-hidden">
                            <Image
                                src="/vapes.png"
                                alt="BedSheets"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    {/* soft glow behind cards for depth */}
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute -right-10 -top-6 w-[420px] h-[420px] rounded-full bg-white/12 blur-3xl"></div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative bottom shape */}
            <div className="absolute bottom-0 left-0 w-full h-[120px]" style={{ transform: 'translateY(1px)' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-full h-full block"
                >
                    <defs>
                        <linearGradient id="fadeGradient" x1="0.5" y1="0" x2="0.5" y2="1">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <rect fill="url(#fadeGradient)" width="1440" height="120" />
                </svg>
            </div>
        </header>
    );
}