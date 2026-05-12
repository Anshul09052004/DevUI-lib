import React from 'react'

function Steps() {

    const steps = [
        {
            n: "01",
            title: "Install DevUI",
            text: "npm install devui-lib to get started with our component library."
        },
        {
            n: "02",
            title: "Import Components",
            text: "Import prebuilt components directly from the devui-lib package."
        },
        {
            n: "03",
            title: "Generate with AI",
            text: "Use our AI generator to create custom components based on your descriptions."
        },
        {
            n: "04",
            title: "Copy & Paste",
            text: "Copy clean JSX code for any component and paste it into your project."
        }
    ]

    return (

        <section className='relative w-full text-white px-4 sm:px-6 py-16 sm:py-24 overflow-hidden'>

            {/* Background Glow */}
            <div className='absolute top-0 left-0 w-52 sm:w-75 h-52 sm:h-75 bg-cyan-500/10 blur-[120px] rounded-full'></div>

            <div className='absolute bottom-0 right-0 w-52 sm:w-75 h-52 sm:h-75 bg-blue-500/10 blur-[120px] rounded-full'></div>

            <div className='relative z-10 max-w-7xl mx-auto'>

                {/* Heading */}
                <div className='text-center mb-16 sm:mb-24'>

                    <p className='inline-block px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm tracking-wide mb-5'>
                        Simple Steps
                    </p>

                    <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold leading-tight'>
                        How It
                        <span className='bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            {" "}Works
                        </span>
                    </h2>

                </div>

                {/* Steps */}
                <div className='relative flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-16 lg:gap-6'>

                    {/* Desktop Horizontal Line */}
                    <div className='hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-linear-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20'></div>

                    {/* Mobile Vertical Line */}
                    <div className='lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-cyan-500/20 via-cyan-400 to-blue-500/20'></div>

                    {
                        steps.map((step, index) => (

                            <div
                                key={index}
                                className='relative z-10 flex flex-col items-center text-center max-w-full sm:max-w-72 w-full'
                            >

                                {/* Circle Number */}
                                <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0F172A] border-4 border-cyan-400 flex items-center justify-center text-cyan-300 text-lg sm:text-xl font-bold shadow-[0_0_25px_rgba(34,211,238,0.4)] shrink-0'>

                                    {step.n}

                                </div>

                                {/* Card */}
                                <div className='mt-6 sm:mt-8 w-full bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2'>

                                    <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4'>
                                        {step.title}
                                    </h3>

                                    <p className='text-gray-400 leading-6 sm:leading-7 text-sm sm:text-base'>
                                        {step.text}
                                    </p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Steps