import React from 'react'
import logo from '../assets/Logo.jpg'

function Footer() {
    return (

        <footer className='w-full border-t border-white/10  text-white px-4 sm:px-6 py-5 sm:py-6'>

            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5'>

                {/* Logo */}
                <div className='flex items-center gap-3 group cursor-pointer'>

                    <img
                        src={logo}
                        alt="DevUI Logo"
                        className='w-11 h-11 sm:w-12 sm:h-12 object-cover rounded-2xl border border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:scale-105 transition-all duration-300'
                    />

                    <h2 className='text-xl sm:text-2xl font-bold bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent'>
                        DevUI
                    </h2>

                </div>

                {/* Email */}
                <a
                    href='mailto:support@devui.com'
                    className='text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm sm:text-base break-all'
                >
                    support@devui.com
                </a>

                {/* Copyright */}
                <p className='text-gray-500 text-xs sm:text-sm text-center sm:text-right'>
                    © 2026 DevUI. All rights reserved.
                </p>

            </div>

        </footer>
    )
}

export default Footer