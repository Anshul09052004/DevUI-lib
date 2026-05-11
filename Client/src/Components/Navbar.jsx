import React from 'react'
import logo from '../assets/logo.jpg'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setUserData } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Navbar({ setShowAuth }) {

    const { userData } = useSelector((state) => state.user);
    const [openProfile, setOpenProfile] = React.useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getLetters = (name) => {
        const names = name.split(' ');
        const initials = names.map((n) => n[0]).join('');
        return initials.toUpperCase();
    }

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:4000/api/auth/logout', {
                withCredentials: true
            });

            dispatch(setUserData(null));
            setOpenProfile(false);
            navigate('/');

        } catch (error) {
            console.error('Error logging out:', error);
        }
    }

    return (
        <nav className='w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5 bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl relative z-50'>

            {/* Logo */}
            <div className='flex items-center gap-3 sm:gap-4 cursor-pointer group min-w-0'>

                <div className='relative shrink-0'>
                    <img
                        src={logo}
                        alt="DevUI Logo"
                        className='w-11 h-11 sm:w-14 sm:h-14 rounded-2xl object-cover border border-cyan-400/40 shadow-lg group-hover:scale-105 transition-all duration-300'
                    />

                    <div className='absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                </div>

                <div className='min-w-0'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent truncate'>
                        DevUI
                    </h1>

                    <p className='hidden sm:block text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase'>
                        Modern React UI Library
                    </p>
                </div>

            </div>

            {/* Right Section */}
            <div className='flex items-center gap-2 sm:gap-4 md:gap-5 relative'>

                <button className='hidden sm:block px-4 md:px-6 py-2.5 rounded-xl text-sm md:text-base text-white font-medium hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 cursor-pointer'>
                    Components
                </button>

                {
                    userData ? (

                        <button
                            onClick={() => setOpenProfile(!openProfile)}
                            className='flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-300'
                        >

                            <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md'>
                                {getLetters(userData?.name || userData?.user?.name || 'User')}
                            </div>

                        </button>

                    ) : (

                        <button
                            onClick={() => setShowAuth(true)}
                            className='px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-cyan-400 text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer'
                        >
                            Login
                        </button>

                    )
                }

                {/* Profile Dropdown */}
                {
                    openProfile && (
                        <div className='absolute top-16 sm:top-20 right-0 w-[90vw] max-w-72 overflow-hidden rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-300'>

                            <div className='absolute -top-10 right-10 w-32 h-32 bg-cyan-500/20 blur-3xl'></div>

                            <div className='relative z-10 p-4 sm:p-5'>

                                <div className='flex items-center gap-4 pb-4 border-b border-white/10'>

                                    <div className='overflow-hidden'>
                                        <h2 className='text-white font-semibold text-base sm:text-lg truncate'>
                                            {userData?.name || userData?.user?.name}
                                        </h2>

                                        <p className='text-gray-400 text-xs sm:text-sm truncate'>
                                            {userData?.email || userData?.user?.email}
                                        </p>
                                    </div>

                                </div>

                                {
                                    userData ? (
                                        <button
                                            onClick={() => setOpenProfile(!openProfile)}
                                            className='flex items-center gap-4 px-4 py-2 mt-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105 hover:bg-white/10 transition-all duration-300'
                                        >

                                            <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md'>
                                                {getLetters(userData?.name || userData?.user?.name || 'U')}
                                            </div>

                                        </button>

                                    ) : (

                                        <button
                                            onClick={() => setShowAuth(true)}
                                            className='mt-4 px-6 py-2.5 rounded-xl bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer'
                                        >
                                            Login
                                        </button>

                                    )
                                }

                                {/* Menu Buttons */}
                                <div className='flex flex-col gap-3 mt-5'>

                                    <button className='w-full text-left px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300 cursor-pointer'>
                                        Components
                                    </button>

                                    <button
                                        onClick={handleLogout}
                                        className='w-full text-left px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-300 cursor-pointer'
                                    >
                                        Logout
                                    </button>

                                </div>

                            </div>

                        </div>
                    )
                }

            </div>

        </nav>
    )
}

export default Navbar