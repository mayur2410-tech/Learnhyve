import React from 'react'
import logo from '../assets/logoblack.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
                        <Link to="/home" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Home</Link>
                        <Link to="/features" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Features</Link>
                        <Link to="/workshop" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Workshops</Link>
                        <Link to="/blog" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Blogs</Link>
                        <Link to="/about" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">About</Link>
                        <Link
                            to="/contact"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-white shadow-lg`}>
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        <Link to="/home" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Home</Link>
                        <Link to="/features" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Features</Link>
                        <Link to="/workshop" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Workshops</Link>
                        <Link to="/blog" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">Blogs</Link>
                        <Link to="/about" className="text-black dark:text-black hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300">About</Link>
                        <Link
                            to="/contact"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar