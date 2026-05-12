import React from 'react'
import { useState } from 'react';
import { HiSparkles } from 'react-icons/hi2';
import { TbCopy, TbCheck, TbArrowRight } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Hero({ setShowAuth }) {

    const navigate = useNavigate();
    const { userData } = useSelector((state) => state.user);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('npm install devui-lib');
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    }

    const handleGenerateClick = () => {
        if (userData) {
            navigate('/generate');
        } else {
            setShowAuth(true);
        }
    }

    return (
        <div className='relative min-h-screen w-full overflow-hidden text-white px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center'>

            {/* Background Glow */}
            <div className='absolute -top-30 -left-30 w-87.5 h-87.5 bg-cyan-500/20 blur-[120px] rounded-full'></div>

            <div className='absolute -bottom-37.5 -right-25 w-87.5 h-87.5 bg-blue-500/20 blur-[120px] rounded-full'></div>

            {/* Hero Content */}
            <div className='relative z-10 flex flex-col items-center text-center max-w-4xl w-full'>

                <p className='px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm tracking-wide mb-6'>
                    ✨ AI Powered React UI Library
                </p>

                <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold leading-tight'>
                    Build React UI
                    <br />
                    <span className='bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text'>
                        Faster with AI
                    </span>
                </h1>

                <p className='mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-7 sm:leading-8 px-2'>
                    Use beautiful prebuilt DevUI components with AI-powered suggestions
                    and generate production-ready UI in minutes.
                </p>

                {/* Install Box */}
                <div className='mt-10 flex items-center justify-between gap-2 sm:gap-3 bg-white/5 border border-white/10 px-4 sm:px-5 py-3 sm:py-4 rounded-2xl backdrop-blur-xl shadow-xl w-full max-w-md sm:max-w-fit'>

                    <span className='text-cyan-400 text-lg'>$</span>

                    <span className='text-gray-200 font-mono text-xs sm:text-sm md:text-base break-all'>
                        npm install devui-lib
                    </span>

                    <button
                        onClick={handleCopy}
                        className='ml-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300'
                    >
                        {
                            copied
                                ? <TbCheck className='text-green-400 text-xl' />
                                : <TbCopy className='text-gray-300 text-xl' />
                        }
                    </button>

                </div>

                {/* Buttons */}
                <div className='mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto'>

                    <button className='group flex items-center justify-center gap-2 bg-white text-black w-full sm:w-auto px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg'>

                        Get Started

                        <TbArrowRight className='group-hover:translate-x-1 transition-all duration-300' />
                    </button>

                    <button
                        onClick={handleGenerateClick}
                        className='group flex items-center justify-center gap-2 border border-cyan-400/20 bg-cyan-400/10 hover:bg-cyan-400/20 w-full sm:w-auto px-7 py-3 rounded-2xl text-cyan-300 font-semibold transition-all duration-300'
                    >

                        <HiSparkles className='group-hover:rotate-12 transition-all duration-300' />

                        Generate AI Component

                    </button>

                </div>

            </div>

            {/* Code Card */}
            <div className="relative mt-16 sm:mt-20 w-full max-w-[650px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-4 sm:p-8 shadow-[0_0_80px_rgba(0,255,255,0.08)] overflow-x-auto">

                {/* Glow */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent"></div>

                {/* Top Dots */}
                <div className="relative flex items-center gap-2 mb-8">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                {/* Code */}
                <div className="relative font-mono text-[12px] sm:text-[15px] md:text-[17px] leading-7 sm:leading-9 min-w-[500px]">

                    <div>
                        <span className="text-cyan-400">import</span>{" "}
                        <span className="text-white">{"{ Button, Card }"}</span>{" "}
                        <span className="text-cyan-400">from</span>{" "}
                        <span className="text-green-300">'devui-lib'</span>
                    </div>

                    <div className="mt-4">
                        <span className="text-cyan-400">export default function</span>{" "}
                        <span className="text-blue-300">App</span>
                        <span className="text-white">()</span>{" "}
                        <span className="text-white">{"{"}</span>
                    </div>

                    <div className="ml-6">
                        <span className="text-cyan-400">return</span>{" "}
                        <span className="text-white">(</span>
                    </div>

                    <div className="ml-10 mt-2">
                        <span className="text-cyan-300">
                            {"<Card "}
                        </span>

                        <span className="text-yellow-200">title</span>

                        <span className="text-white">=</span>

                        <span className="text-green-300">"Dashboard"</span>

                        <span className="text-cyan-300">{">"}</span>
                    </div>

                    <div className="ml-16 mt-2">
                        <span className="text-cyan-300">
                            {"<Button "}
                        </span>

                        <span className="text-yellow-200">text</span>

                        <span className="text-white">=</span>

                        <span className="text-green-300">"Hello"</span>

                        <span className="text-cyan-300">{" />"}</span>
                    </div>

                    <div className="ml-10 mt-2">
                        <span className="text-cyan-300">
                            {"</Card>"}
                        </span>
                    </div>

                    <div className="ml-6 mt-2">
                        <span className="text-white">);</span>
                    </div>

                    <div>
                        <span className="text-white">{"}"}</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero