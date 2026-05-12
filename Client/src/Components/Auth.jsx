import React from 'react'
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'
import logo from '../assets/Logo.jpg'
import { auth, provider } from '../Utiles/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUserData } from '../Redux/userSlice'
import { useNavigate } from 'react-router-dom'

import {
    TbLogin2,
    TbSettings,
    TbCopy,
    TbDownload
} from 'react-icons/tb'

import { HiSparkles } from 'react-icons/hi2'
import { FaInfinity, FaGoogle } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import axios from 'axios'

const steps = [
    {
        icon: <TbLogin2 />,
        text: 'Login with Google',
    },
    {
        icon: <HiSparkles />,
        text: 'Get 150 AI Credits',
    },
    {
        icon: <TbSettings />,
        text: 'Customize Props',
    },
    {
        icon: <TbCopy />,
        text: 'Generate Components',
    },
    {
        icon: <TbDownload />,
        text: 'Copy or Save',
    }
]

function Auth({ onClose }) {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const googleAuth = async () => {
        try {

            const response = await signInWithPopup(auth, provider)

            let User = response.user
            let name = User.displayName
            let email = User.email

            const result = await axios.post(
                'http://localhost:4000/api/auth/google',
                { name, email },
                { withCredentials: true }
            )

            dispatch(setUserData(result.data.user))

            if (onClose) onClose();

            Navigate('/')

        } catch (error) {
            console.error('Google authentication failed:', error)
        }
    }

    return (
        <div
            className="
                w-full
                flex items-start sm:items-center
                justify-center
                min-h-screen
                sm:min-h-fit
            "
        >

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="
                    relative
                    w-full
                    max-w-230
                    min-h-screen
                    sm:min-h-fit
                    lg:min-h-140
                    bg-[#09090b]
                    sm:rounded-[28px]
                    overflow-hidden
                    border-0 sm:border
                    border-white/10
                    shadow-none sm:shadow-[0_0_80px_rgba(0,0,0,0.8)]
                    flex flex-col lg:flex-row
                "
            >

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
                        absolute
                        top-4 right-4
                        sm:top-5 sm:right-5
                        z-50
                        w-10 h-10
                        rounded-full
                        bg-white/5
                        hover:bg-white/15
                        text-zinc-400
                        hover:text-white
                        transition-all duration-300
                        flex items-center justify-center
                    "
                >
                    <RxCross1 size={18} />
                </button>

                {/* RIGHT SECTION */}
                <div
                    className="
                        order-1 lg:order-2
                        w-full lg:w-1/2
                        bg-[#09090b]
                        flex items-center justify-center
                        px-5
                        pt-20
                        pb-14
                        sm:p-10
                        lg:p-12
                    "
                >

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="
                            w-full
                            max-w-sm
                            flex flex-col items-center
                        "
                    >

                        {/* Logo */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4
                            }}
                            className="mb-6"
                        >

                            <div
                                className="
                                    w-16 h-16
                                    sm:w-14 sm:h-14
                                    rounded-2xl
                                    overflow-hidden
                                    border border-white/10
                                    bg-[#111]
                                    shadow-2xl
                                "
                            >

                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                        </motion.div>

                        {/* Heading */}
                        <h1
                            className="
                                text-white
                                text-4xl
                                sm:text-3xl
                                font-bold
                                mb-4
                                text-center
                            "
                        >
                            Welcome
                        </h1>

                        {/* Description */}
                        <p
                            className="
                                text-zinc-400
                                text-[16px]
                                sm:text-[15px]
                                leading-8
                                sm:leading-relaxed
                                text-center
                                mb-10
                                px-2
                            "
                        >
                            Sign in to generate AI-powered UI
                            <br className="hidden sm:block" />
                            components in seconds
                        </p>

                        {/* Stats */}
                        <div
                            className="
                                w-full
                                grid grid-cols-3
                                gap-4
                                mb-10
                            "
                        >

                            <div className="flex flex-col items-center">

                                <h2 className="text-white text-3xl sm:text-2xl font-bold">
                                    150
                                </h2>

                                <span
                                    className="
                                        text-[10px]
                                        sm:text-[9px]
                                        tracking-[0.2em]
                                        text-zinc-500
                                        mt-1
                                    "
                                >
                                    AI CREDITS
                                </span>

                            </div>

                            <div className="flex flex-col items-center">

                                <div className="text-white text-3xl sm:text-2xl">
                                    <FaInfinity />
                                </div>

                                <span
                                    className="
                                        text-[10px]
                                        sm:text-[9px]
                                        tracking-[0.2em]
                                        text-zinc-500
                                        mt-1
                                    "
                                >
                                    COMPONENTS
                                </span>

                            </div>

                            <div className="flex flex-col items-center">

                                <h2 className="text-white text-3xl sm:text-2xl font-bold">
                                    JSX
                                </h2>

                                <span
                                    className="
                                        text-[10px]
                                        sm:text-[9px]
                                        tracking-[0.2em]
                                        text-zinc-500
                                        mt-1
                                    "
                                >
                                    READY
                                </span>

                            </div>

                        </div>

                        {/* Button */}
                        <motion.button
                            onClick={googleAuth}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="
                                w-full
                                h-14.5
                                sm:h-13
                                rounded-2xl
                                bg-white
                                text-black
                                font-semibold
                                text-[17px]
                                sm:text-[15px]
                                flex items-center justify-center
                                gap-3
                                hover:bg-zinc-100
                                transition-all duration-300
                                shadow-[0_0_20px_rgba(255,255,255,0.15)]
                            "
                        >

                            <FaGoogle className="text-xl sm:text-lg" />

                            Continue with Google

                        </motion.button>

                        {/* Footer */}
                        <div
                            className="
                                mt-8
                                flex flex-wrap items-center justify-center
                                gap-2
                                text-[13px]
                                text-zinc-500
                                text-center
                            "
                        >

                            <span>No account needed for npm</span>

                            <button
                                className="
                                    flex items-center gap-1
                                    text-zinc-300
                                    hover:text-white
                                    transition-all
                                "
                            >

                                View docs

                                <FaArrowRightLong className="text-[10px]" />

                            </button>

                        </div>

                    </motion.div>

                </div>

                {/* LEFT SECTION */}
                <div
                    className="
                        order-2 lg:order-1
                        w-full lg:w-1/2
                        bg-linear-to-br
                        from-[#0c2b36]
                        to-[#071920]
                        px-5
                        py-10
                        sm:p-8
                        lg:p-10
                        border-t lg:border-t-0
                        lg:border-r
                        border-white/5
                    "
                >

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 mb-10"
                    >

                        <div
                            className="
                                w-14 h-14
                                sm:w-10 sm:h-10
                                rounded-xl
                                overflow-hidden
                                bg-white
                                shadow-lg
                            "
                        >

                            <img
                                src={logo}
                                alt="logo"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <h2
                            className="
                                text-white
                                text-4xl
                                sm:text-2xl
                                font-bold
                            "
                        >
                            VirtualUI
                        </h2>

                    </motion.div>

                    {/* Heading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="
                            text-[12px]
                            sm:text-[11px]
                            tracking-[6px]
                            font-bold
                            text-cyan-200/50
                            mb-8
                        "
                    >
                        HOW IT WORKS
                    </motion.p>

                    {/* Steps */}
                    <div className="space-y-4">

                        {steps.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className={`
                                    flex items-center gap-4
                                    p-4
                                    rounded-2xl
                                    transition-all duration-300
                                    ${index === 0
                                        ? 'bg-cyan-500/10 border border-cyan-500/20'
                                        : 'bg-white/2 border border-white/5'}
                                `}
                            >

                                <div
                                    className={`
                                        w-14 h-14
                                        sm:w-10 sm:h-10
                                        rounded-xl
                                        flex items-center justify-center
                                        text-2xl sm:text-xl
                                        shrink-0
                                        ${index === 0
                                            ? 'bg-cyan-500/20 text-cyan-400'
                                            : 'bg-white/5 text-cyan-200/70'}
                                    `}
                                >
                                    {item.icon}
                                </div>

                                <span
                                    className={`
                                        text-[18px]
                                        sm:text-[15px]
                                        font-medium
                                        ${index === 0
                                            ? 'text-white'
                                            : 'text-cyan-100/70'}
                                    `}
                                >
                                    {item.text}
                                </span>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </motion.div>

        </div>
    )
}

export default Auth