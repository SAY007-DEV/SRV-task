import React, { useState } from 'react'
import useUserStore from './Store/userStore' // Update path as needed

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const userInfo = useUserStore(state => state.userInfo);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="relative">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="asap.png" alt="ASAP Logo" className="h-16 md:h-20" />
            </div>

            {/* Centered Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="space-x-8"> {/* Increased space between nav items */}
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium text-lg">Jobs</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium text-lg">Internship</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium text-lg">Job Fair</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium text-lg">Companies</a>
                <a href="#" className="text-gray-700 hover:text-blue-500 font-medium text-lg">Support</a>
              </div>
            </nav>

            {/* Profile Section - Right Side */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <button 
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition duration-150"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {userInfo?.fullName?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="text-gray-700 font-medium">
                    {userInfo?.fullName?.split(' ')[0] || 'User'}
                  </span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {/* <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      My Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                    </a> */}
                    <hr className="my-2" />
                    <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Profile Icon */}
              <button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-medium">
                  {userInfo?.fullName?.charAt(0) || 'U'}
                </span>
              </button>
              
              <button className="flex items-center" onClick={toggleMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow absolute w-full z-50">
          <div className="container mx-auto px-4 py-4">
            <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Jobs</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Internship</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Job Fair</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Companies</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Support</a>
            <hr className="my-2" />
            {/* <a href="/profile" className="block text-gray-700 hover:text-blue-500 py-2">My Profile</a> */}
            {/* <a href="#" className="block text-gray-700 hover:text-blue-500 py-2">Settings</a> */}
            <a href="#" className="block text-red-600 hover:text-red-700 py-2">Logout</a>
          </div>
        </nav>
      )}
    </div>
  )
}

export default Header