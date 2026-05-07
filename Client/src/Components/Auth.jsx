import React from 'react'
import { motion } from 'framer-motion'
import { RxCross1 } from 'react-icons/rx'
import logo from '../assets/Logo.jpg'
import { auth, provider } from '../Utiles/firebase'
import { signInWithPopup } from 'firebase/auth'

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

const googleAuth = async () => {
    try {
        const response = await signInWithPopup(auth, provider)
        let User = response.user
        let name = User.displayName
        let email = User.email
        console.log(response.user)

        const result = await axios.post('http://localhost:4000/api/auth/google', {
            name, email
        }, { withCredentials: true })



    } catch (error) {
        console.error('Google authentication failed:', error)

    }
}

function Auth({ onClose }) {
    return (
        <div className="relative min-h-screen bg-[#030303] overflow-hidden flex items-center justify-center px-4 py-10">

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-600/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-600/20 blur-3xl rounded-full"></div>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-6xl rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,255,255,0.05)] grid lg:grid-cols-2"
            >

                {/* Close */}
                <button onClick={onClose} className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition text-white flex items-center justify-center">
                    <RxCross1 />
                </button>

                {/* LEFT */}
                <div className="p-8 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/10">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            className="w-12 h-12 rounded-2xl object-cover border border-white/10 shadow-lg"
                        />

                        <h2 className="text-white text-3xl font-bold tracking-wide">
                            DevUI
                        </h2>
                    </motion.div>

                    {/* Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs tracking-[6px] text-zinc-500 mb-8"
                    >
                        HOW IT WORKS
                    </motion.p>

                    {/* Steps */}
                    <div className="space-y-5">

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
                                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                            >

                                <div
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}
                                >
                                    {item.icon}
                                </div>

                                <span className="text-zinc-200 text-lg font-medium">
                                    {item.text}
                                </span>

                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative flex items-center justify-center p-8 sm:p-10 lg:p-14">

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10"></div>

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
                            className="flex justify-center mb-8"
                        >
                            <img
                                src={logo}
                                alt="logo"
                                className="w-24 h-24 rounded-3xl border border-white/10 shadow-2xl object-cover"
                            />
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-center text-white text-5xl font-bold mb-4 leading-tight">
                            Welcome
                        </h1>

                        <p className="text-center text-zinc-400 text-lg leading-relaxed mb-10">
                            Sign in to generate AI-powered UI
                            components in seconds.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-10">

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                            >
                                <h2 className="text-white text-2xl font-bold">
                                    150
                                </h2>

                                <span className="text-[11px] tracking-widest text-zinc-500">
                                    AI CREDITS
                                </span>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                            >
                                <div className="flex justify-center text-blue-400 text-xl mb-1">
                                    <FaInfinity />
                                </div>

                                <span className="text-[11px] tracking-widest text-zinc-500">
                                    COMPONENTS
                                </span>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                            >
                                <h2 className="text-white text-2xl font-bold">
                                    JSX
                                </h2>

                                <span className="text-[11px] tracking-widest text-zinc-500">
                                    READY
                                </span>
                            </motion.div>

                        </div>

                        {/* Button */}
                        <motion.button
                            onClick={googleAuth}
                            whileHover={{
                                scale: 1.03
                            }}
                            whileTap={{
                                scale: 0.97
                            }}
                            className="w-full h-14 rounded-2xl bg-white text-black font-semibold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all duration-300 shadow-2xl"
                        >
                            <FaGoogle className="text-xl" />
                            Continue with Google
                        </motion.button>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-zinc-500 text-sm">

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