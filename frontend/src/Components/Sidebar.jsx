import React from 'react'
import InfoSection from './InfoSection'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 bg-white shadow rounded-lg p-4 mb-4 lg:mb-0 mx-auto mt-4 ml-4">
        <div className="text-center">
          <img src="pro.jpg" alt="Profile Picture" className="h-24 w-24 rounded-full mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Abhishek Shankar</h2>
          <p className="text-gray-500">@abhisheks2024</p>
          <div className="mt-4">
            <span className="text-gray-700">60%</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center text-gray-700 mb-2">
            <i className="fas fa-phone-alt mr-2"></i>
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center text-gray-700 mb-2">
            <i className="fas fa-envelope mr-2"></i>
            <span>abhishekshankar123@gmail.com</span>
          </div>
          <div className="flex items-center text-gray-700 mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>Thiruvananthapuram, Kerala</span>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full text-blue py-2 rounded-lg">Edit/Update Profile</button>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
            <li 
              className="flex items-center text-gray-700 p-2 rounded hover:bg-gray-100 transition duration-200 cursor-pointer"
              onClick={() => navigate('/profile')}
            >
              <i className="fas fa-user mr-2"></i>
              <span>My Profile</span>
            </li>
            <li className="flex items-center text-gray-700 p-2 rounded hover:bg-gray-100 transition duration-200">
              <i className="fas fa-file-alt mr-2"></i>
              <span>Payments</span>
            </li>
            <li className="flex items-center text-gray-700 p-2 rounded hover:bg-gray-100 transition duration-200">
              <i className="fas fa-clipboard-list mr-2"></i>
              <span>Application Status</span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200">Logout</button>
        </div>
        <div className="mt-6 text-gray-500 text-sm">
          {/* <p>Last updated on 10 Oct 2024</p> */}
        </div>
      </aside>

      <div className="flex-1">
        <InfoSection />
      </div>
    </div>
  )
}

export default Sidebar