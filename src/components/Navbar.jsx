import React from 'react'
import logo from '../assets/logoblack.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex space-x-12 mt-3`}>
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
            <div
              className="menu-toggle md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar