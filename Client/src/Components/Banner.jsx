import React from 'react'
import { useSelector } from 'react-redux'
import { HiSparkles } from 'react-icons/hi2'
import { TbArrowRight } from 'react-icons/tb'

function Banner({ setShowAuth }) {

    const { userData } = useSelector((state) => state.user);

    return (

        <section className='relative w-full  px-4 sm:px-6 py-16 sm:py-24 overflow-hidden'>

            {/* Background Glow */}
            <div className='absolute top-0 left-0 w-52 sm:w-[320px] h-52 sm:h-[320px] bg-cyan-500/10 blur-[120px] rounded-full'></div>

            <div className='absolute bottom-0 right-0 w-52 sm:w-[320px] h-52 sm:h-[320px] bg-blue-500/10 blur-[120px] rounded-full'></div>

            <div className='relative z-10 max-w-6xl mx-auto'>

                <div className='relative overflow-hidden rounded-[28px] sm:rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl px-5 sm:px-8 md:px-16 py-10 sm:py-16 text-center shadow-[0_0_80px_rgba(0,255,255,0.08)]'>

                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent'></div>

                    <div className='relative z-10'>

                        {/* Top Badge */}
                        <p className='inline-block px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm tracking-wide mb-5 sm:mb-6'>
                            ✨ DevUI Components
                        </p>

                        {/* Heading */}
                        <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight'>

                            Ready to
                            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                                {" "}get started?
                            </span>

                        </h2>

                        {/* Description */}
                        <p className='mt-5 sm:mt-6 text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-6 sm:leading-8 px-2'>

                            Start building your dream UI with DevUI and create
                            beautiful modern React interfaces in minutes.

                        </p>

                        {
                            userData ? (

                                <div className='mt-10'>

                                    <p className='text-lg sm:text-xl text-white break-words'>
                                        Welcome back,
                                        <span className='text-cyan-300 font-semibold'>
                                            {" "}{userData?.name || userData?.user?.name}
                                        </span>
                                    </p>

                                    <p className='mt-4 text-gray-400 max-w-2xl mx-auto leading-6 sm:leading-7 text-sm sm:text-base px-2'>
                                        Continue exploring AI-powered components and
                                        generate production-ready UI instantly.
                                    </p>

                                    {/* Buttons */}
                                    <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full'>

                                        <button className='group flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg'>

                                            Generate AI Component

                                            <HiSparkles className='group-hover:rotate-12 transition-all duration-300' />

                                        </button>

                                        <button className='group flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300'>

                                            Components

                                            <TbArrowRight className='group-hover:translate-x-1 transition-all duration-300' />

                                        </button>

                                    </div>

                                </div>

                            ) : (

                                <div className='mt-10'>

                                    <p className='text-gray-300 text-sm sm:text-lg px-2'>
                                        Sign in with Google to get started instantly.
                                    </p>

                                    {/* Buttons */}
                                    <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full'>

                                        <button
                                            onClick={() => setShowAuth(true)}
                                            className='group flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg'
                                        >

                                            Generate AI Component

                                            <HiSparkles className='group-hover:rotate-12 transition-all duration-300' />

                                        </button>

                                        <button className='group flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300'>

                                            Components

                                            <TbArrowRight className='group-hover:translate-x-1 transition-all duration-300' />

                                        </button>

                                    </div>

                                </div>

                            )
                        }

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Banner