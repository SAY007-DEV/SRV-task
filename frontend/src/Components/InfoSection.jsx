import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicForm from './BasicForm'
import Modal from './Modal'

function InfoSection() {
  const userInfo = useSelector((state) => state)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUpdateClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex-1 mt-6 mr-4">
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <button className="text-blue-500" onClick={handleUpdateClick}>Update</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <p className="text-gray-700"><strong>Full Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
            <p className="text-gray-700"><strong>Date of Birth:</strong> {userInfo.dob}</p>
            <p className="text-gray-700"><strong>Gender:</strong> {userInfo.gender}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-700"><strong>Mobile:</strong> {userInfo.mobile} <i className="fas fa-check-circle text-green-500"></i></p>
            <p className="text-gray-700"><strong>Email:</strong> {userInfo.email} <i className="fas fa-check-circle text-green-500"></i></p>
            <p className="text-gray-700"><strong>Aadhar:</strong> {userInfo.aadhar} <button className="text-red-500">Verify</button></p>
          </div>
        </div>
        <p className="text-gray-700 mt-4"><strong>Address:</strong> {userInfo.address}</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Payment Pending</h2>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Pay Now</button>
        </div>
        <p className="text-gray-700">Registration fee 500 rupees pending. Pay now and get access to all services.</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <button className="text-blue-500">Update Education</button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700"><strong>Master of Business Administration (MBA)</strong> <button className="text-blue-500">Edit</button></p>
          <p className="text-gray-500">XYZ University, Thiruvananthapuram, Kerala</p>
          <p className="text-gray-500">2018 – 2020</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700"><strong>Higher Secondary Certificate (HSC)</strong> <button className="text-blue-500">Edit</button></p>
          <p className="text-gray-500">St. Mary's Higher Secondary School, Ernakulam, Kerala</p>
          <p className="text-gray-500">2012 – 2014</p>
        </div>
        <div>
          <p className="text-gray-700"><strong>Secondary School Certificate (SSC)</strong> <button className="text-blue-500">Edit</button></p>
          <p className="text-gray-500">Govt. Model School, Alappuzha, Kerala</p>
          <p className="text-gray-500">2010 – 2012</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Career Objective</h2>
          <button className="text-blue-500">Update</button>
        </div>
        <p className="text-gray-700">For Entry-Level Position</p>
        <p className="text-gray-500">Enthusiastic and highly motivated graduate with a degree in Business Administration, eager to apply strong analytical and communication skills in a fast-paced corporate environment. Looking for an entry-level role in marketing where I can contribute to team success while gaining hands-on experience and advancing my career.</p>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Key Skills</h2>
          <button className="text-blue-500">Update Skills</button>
        </div>
        <div className="flex flex-wrap">
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Communication</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">UI Designing</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">UI Development</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Leadership</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Human Resource</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">php</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Accounting</span>
          <span className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm mr-2 mb-2">Data Science</span>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Resume</h2>
          <button className="text-blue-500">Update Resume</button>
        </div>
        <div className="flex items-center mb-4">
          <img src="https://placehold.co/50x50" alt="Resume Icon" className="h-12 w-12 mr-4" />
          <div>
            <p className="text-gray-700">abhishek_resume.pdf</p>
            <p className="text-gray-500">Uploaded on Sep 30, 2024</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Add Video Resume</button>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <button className="text-blue-500">Update Portfolio</button>
        </div>
        <div className="mb-4">
          <p className="text-gray-700"><strong>GitHub</strong></p>
          <p className="text-gray-500">https://github.com/abhishekshankar</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700"><strong>Behance</strong></p>
          <p className="text-gray-500">https://www.behance.net/abhishekshankar</p>
        </div>
        <div>
          <p className="text-gray-700"><strong>Personal Website</strong></p>
          <p className="text-gray-500">http://www.abhishekshankar.info</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BasicForm closeModal={closeModal} initialData={userInfo} />
      </Modal>
    </div>
  )
}

export default InfoSection