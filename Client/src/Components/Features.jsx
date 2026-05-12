import React from 'react'
import { HiSparkles } from 'react-icons/hi2'
import {
    TbAdjustments,
    TbBrandNpm,
    TbCode,
    TbLayout,
    TbPlayerPlay
} from 'react-icons/tb'

function Features() {

    const features = [
        {
            icon: TbLayout,
            title: "Prebuilt Components",
            text: "Everything you need to build beautiful modern UI quickly."
        },
        {
            icon: HiSparkles,
            title: "AI Component Generator",
            text: "Describe your idea and generate stunning UI instantly."
        },
        {
            icon: TbAdjustments,
            title: "Customization Prompts",
            text: "Modify generated components using smart AI prompts."
        },
        {
            icon: TbCode,
            title: "Clean JSX Code",
            text: "Copy production-ready React and Tailwind code easily."
        },
        {
            icon: TbBrandNpm,
            title: "NPM Package",
            text: "Import ready-made DevUI components directly from npm."
        },
        {
            icon: TbPlayerPlay,
            title: "Live Preview",
            text: "Preview every component live before using it."
        }
    ]

    return (

        <section className='relative w-full text-white px-4 sm:px-6 py-16 sm:py-24 overflow-hidden'>

            {/* Background Glow */}
            <div className='absolute top-0 left-0 w-52 sm:w-75 h-52 sm:h-75 bg-cyan-500/10 blur-[120px] rounded-full'></div>

            <div className='absolute bottom-0 right-0 w-52 sm:w-75 h-52 sm:h-75 bg-blue-500/10 blur-[120px] rounded-full'></div>

            <div className='relative z-10 max-w-7xl mx-auto'>

                {/* Heading */}
                <div className='text-center mb-12 sm:mb-16'>

                    <p className='inline-block px-4 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs sm:text-sm tracking-wide mb-5'>
                        What’s Inside
                    </p>

                    <h2 className='text-3xl sm:text-4xl md:text-6xl font-bold leading-tight'>
                        Everything you need
                        <br />

                        <span className='bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                            to build faster
                        </span>
                    </h2>

                    <p className='mt-5 sm:mt-6 text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto px-2'>
                        Powerful AI tools and reusable UI components crafted for modern React developers.
                    </p>

                </div>

                {/* Features Grid */}
                {/* Features Grid */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8'>

    {
        features.map((feature, index) => (

            <div
                key={index}
                className='group relative bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500 overflow-hidden w-full'
            >

                {/* Hover Glow */}
                <div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                {/* Mobile Layout */}
                <div className='relative z-10 flex items-start gap-4 sm:block'>

                    {/* Icon */}
                    <div className='shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-0 sm:mb-6'>

                        <feature.icon size={24} className='sm:w-[30px] sm:h-[30px]' />

                    </div>

                    {/* Content */}
                    <div>

                        {/* Title */}
                        <h3 className='text-lg sm:text-2xl font-semibold mb-2 sm:mb-4'>
                            {feature.title}
                        </h3>

                        {/* Text */}
                        <p className='text-gray-400 leading-6 sm:leading-7 text-sm sm:text-base'>
                            {feature.text}
                        </p>

                    </div>

                </div>

            </div>
        ))
    }

</div>

            </div>

        </section>
    )
}

export default Features