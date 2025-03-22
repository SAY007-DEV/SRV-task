import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>

<header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="asap.png" alt="ASAP Logo" className="h-10" />
                        <nav className="hidden md:flex ml-6">
                            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Jobs</a>
                            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Internship</a>
                            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Job Fair</a>
                            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Companies</a>
                            <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Support</a>
                        </nav>
                    </div>
                    <div className="flex items-center md:hidden ml-auto">
                        <button className="flex items-center" onClick={toggleMenu}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow">
                    <div className="container mx-auto px-4 py-4">
                        <a href="#" className="block text-gray-700 hover:text-blue-500 mb-2">Jobs</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 mb-2">Internship</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 mb-2">Job Fair</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 mb-2">Companies</a>
                        <a href="#" className="block text-gray-700 hover:text-blue-500 mb-2">Support</a>
                    </div>
                </nav>
            )}
    </div>
  )
}

export default Header