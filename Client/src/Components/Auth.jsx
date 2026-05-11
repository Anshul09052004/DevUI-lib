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
        color: 'from-blue-500/20 to-cyan-500/20 text-blue-400'
    },
    {
        icon: <HiSparkles />,
        text: 'Get 150 AI Credits',
        color: 'from-purple-500/20 to-pink-500/20 text-purple-400'
    },
    {
        icon: <TbSettings />,
        text: 'Customize Props',
        color: 'from-pink-500/20 to-rose-500/20 text-pink-400'
    },
    {
        icon: <TbCopy />,
        text: 'Generate Component',
        color: 'from-orange-500/20 to-yellow-500/20 text-orange-400'
    },
    {
        icon: <TbDownload />,
        text: 'Copy or Download',
        color: 'from-green-500/20 to-emerald-500/20 text-green-400'
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
        <div className="relative min-h-screen bg-[#030303] overflow-hidden flex items-center justify-center px-3 sm:px-4 py-4 sm:py-10">

            {/* Background Glow */}
            <div className="absolute -top-[100px] -left-[100px] w-72 h-72 sm:w-[350px] sm:h-[350px] bg-blue-600/20 blur-3xl rounded-full"></div>

            <div className="absolute -bottom-[120px] -right-[120px] w-72 h-72 sm:w-[350px] sm:h-[350px] bg-purple-600/20 blur-3xl rounded-full"></div>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-6xl rounded-[30px] sm:rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] grid lg:grid-cols-2"
            >

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 transition text-white flex items-center justify-center"
                >
                    <RxCross1 />
                </button>

                {/* LEFT */}
                <div className="p-5 sm:p-8 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-8 sm:mb-12"
                    >

                        <img
                            src={logo}
                            alt="logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl object-cover border border-white/10 shadow-lg"
                        />

                        <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-wide">
                            DevUI
                        </h2>

                    </motion.div>

                    {/* Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[10px] sm:text-xs tracking-[4px] sm:tracking-[6px] text-zinc-500 mb-6 sm:mb-8"
                    >
                        HOW IT WORKS
                    </motion.p>

                    {/* Steps */}
                    <div className="space-y-3 sm:space-y-5">

                        {steps.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.03,
                                    borderColor: 'rgba(255,255,255,0.2)'
                                }}
                                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition-all duration-300"
                            >

                                <div
                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-xl sm:text-2xl shrink-0`}
                                >
                                    {item.icon}
                                </div>

                                <span className="text-zinc-200 text-sm sm:text-lg font-medium">
                                    {item.text}
                                </span>

                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex items-center justify-center p-5 sm:p-8 lg:p-14">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/10"></div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 w-full max-w-md"
                    >

                        {/* Logo */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3
                            }}
                            className="flex justify-center mb-6 sm:mb-8"
                        >

                            <img
                                src={logo}
                                alt="logo"
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl border border-white/10 shadow-2xl object-cover"
                            />

                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-center text-white text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                            Welcome
                        </h1>

                        <p className="text-center text-zinc-400 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
                            Sign in to generate AI-powered UI
                            components in seconds.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/4 p-3 sm:p-4 text-center"
                            >
                                <h2 className="text-white text-lg sm:text-2xl font-bold">
                                    150
                                </h2>

                                <span className="text-[9px] sm:text-[11px] tracking-widest text-zinc-500">
                                    AI CREDITS
                                </span>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/4 p-3 sm:p-4 text-center"
                            >

                                <div className="flex justify-center text-blue-400 text-lg sm:text-xl mb-1">
                                    <FaInfinity />
                                </div>

                                <span className="text-[9px] sm:text-[11px] tracking-widest text-zinc-500">
                                    COMPONENTS
                                </span>

                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/4 p-3 sm:p-4 text-center"
                            >

                                <h2 className="text-white text-lg sm:text-2xl font-bold">
                                    JSX
                                </h2>

                                <span className="text-[9px] sm:text-[11px] tracking-widest text-zinc-500">
                                    READY
                                </span>

                            </motion.div>

                        </div>

                        {/* Button */}
                        <motion.button
                            onClick={googleAuth}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full h-12 sm:h-14 rounded-2xl bg-white text-black font-semibold text-sm sm:text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all duration-300 shadow-2xl"
                        >

                            <FaGoogle className="text-lg sm:text-xl" />

                            Continue with Google

                        </motion.button>

                        {/* Footer */}
                        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-zinc-500 text-xs sm:text-sm text-center">

                            <span>No account needed for npm</span>

                            <button className="flex items-center gap-1 text-white hover:text-blue-400 transition">
                                View docs
                                <FaArrowRightLong className="text-xs" />
                            </button>

                        </div>

                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Auth