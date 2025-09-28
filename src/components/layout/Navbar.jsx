'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaSortDown } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoChevronDownSharp } from "react-icons/io5";


const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [language, setLanguage] = useState('en');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            //will implement search functionality later
        }
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        // will implement language change functionality later
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // will implement logout logic later
    };

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="leading-tight">
                                <p className="font-extrabold text-xl bg-gradient-to-r from-[#57b4f1] to-blue-600 bg-clip-text text-transparent">MOVIE</p>
                                <p className="text-white text-right mr-[-8px] mt-[-5px] text-sm">World</p>
                            </div>
                        </Link>
                    </div>
                    {/* Search */}
                    <div className="flex-1 mx-12">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search movies"
                                className="w-full bg-white text-gray-800 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-800"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                            <select
                                className="appearance-none absolute right-1 top-1 bg-gray-300 text-black px-2 py-1.5 pr-6 rounded-md text-sm focus:outline-none"
                            >
                                <option value="all">All</option>
                                <option value="movies">Movies</option>
                                <option value="series">Series</option>
                            </select>

                            <FaSortDown className="absolute right-3 top-1.5 text-black pointer-events-none text-xl" />
                        </form>
                    </div>

                    {/* Right items */}
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="px-3 py-2 rounded-lg text-amber-500 hover:bg-gray-700 transition-colors">
                            Get Pro
                        </Link>
                        <Link href="/movies" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                            Movies
                        </Link>
                        <Link href="#" className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                            Watch-list
                        </Link>

                        <div className="relative inline-block">
                            <select
                                value={language}
                                onChange={handleLanguageChange}
                                className="bg-gradient-to-r from-[#57b4f1] to-blue-600 text-white px-3 py-2 rounded-full pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                            >
                                <option className='bg-gray-800' value="en">EN</option>
                                <option className='bg-gray-800' value="bn">BN</option>
                            </select>

                            <IoChevronDownSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                        </div>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setOpen(!open)}
                                className="p-2 rounded-full cursor-pointer"
                            >
                                <GoPerson className="text-2xl text-white" />
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-lg shadow-lg z-50">
                                    {isLoggedIn ? (
                                        <>
                                            <Link
                                                href="/profile"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                My Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href="/login"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="block px-4 py-2 hover:bg-gray-100"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;