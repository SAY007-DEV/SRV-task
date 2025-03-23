import React, { useState } from 'react'
import useUserStore from './store/userStore' // Update path as needed
import BasicForm from './BasicForm'
import Modal from './Modal'

function InfoSection() {
  const userInfo = useUserStore(state => state.userInfo)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEducationEditing, setIsEducationEditing] = useState(false)
  const [educationData, setEducationData] = useState({
    mba: {
      degree: "Master of Business Administration (MBA)",
      institution: "XYZ University, Thiruvananthapuram, Kerala",
      years: "2018 – 2020"
    },
    hsc: {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "St. Mary's Higher Secondary School, Ernakulam, Kerala",
      years: "2012 – 2014"
    },
    ssc: {
      degree: "Secondary School Certificate (SSC)",
      institution: "Govt. Model School, Alappuzha, Kerala",
      years: "2010 – 2012"
    }
  })

  console.log('Current userInfo:', userInfo); // For debugging

  const handleUpdateClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleEducationUpdate = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData)
      });

      if (response.ok) {
        setIsEducationEditing(false);
        // You might want to show a success message here
      } else {
        throw new Error('Failed to update education');
      }
    } catch (error) {
      console.error('Error updating education:', error);
      // You might want to show an error message here
    }
  }

  const handleEducationChange = (level, field, value) => {
    setEducationData(prev => ({
      ...prev,
      [level]: {
        ...prev[level],
        [field]: value
      }
    }))
  }

  return (
    <div className="flex-1 mt-6 mr-4">
      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Personal Information
          </h2>
          <button 
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Full Name</p>
            <p className="font-medium">{userInfo?.fullName || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Birth</p>
            <p className="font-medium">{userInfo?.dateOfBirth || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Gender</p>
            <p className="font-medium">{userInfo?.gender || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Mobile</p>
            <p className="font-medium">{userInfo?.mobile || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Email</p>
            <p className="font-medium">{userInfo?.email || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Aadhar</p>
            <p className="font-medium">{userInfo?.aadhar || 'Not provided'}</p>
          </div>
          <div>
            <p className="text-gray-600">Address</p>
            <p className="font-medium">{userInfo?.address || 'Not provided'}</p>
          </div>
          {userInfo?.guardianName && (
            <div>
              <p className="text-gray-600">Guardian Name</p>
              <p className="font-medium">{userInfo.guardianName}</p>
            </div>
          )}
          {userInfo?.guardianNumber && (
            <div>
              <p className="text-gray-600">Guardian Number</p>
              <p className="font-medium">{userInfo.guardianNumber}</p>
            </div>
          )}
        </div>
        
        {/* Verification Status */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Verification Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${userInfo?.mobileVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span>Mobile {userInfo?.mobileVerified ? 'Verified' : 'Pending'}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${userInfo?.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span>Email {userInfo?.emailVerified ? 'Verified' : 'Pending'}</span>
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${userInfo?.aadharVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span>Aadhar {userInfo?.aadharVerified ? 'Verified' : 'Pending'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          {isEducationEditing ? (
            <div className="space-x-2">
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={handleEducationUpdate}
              >
                Save
              </button>
              <button 
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsEducationEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button 
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              onClick={() => setIsEducationEditing(true)}
            >
              Update Education
            </button>
          )}
        </div>

        {Object.entries(educationData).map(([level, data]) => (
          <div key={level} className="mb-4">
            {isEducationEditing ? (
              <div className="space-y-2">
                <input
                  className="w-full p-2 border rounded"
                  value={data.degree}
                  onChange={(e) => handleEducationChange(level, 'degree', e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded"
                  value={data.institution}
                  onChange={(e) => handleEducationChange(level, 'institution', e.target.value)}
                />
                <input
                  className="w-full p-2 border rounded"
                  value={data.years}
                  onChange={(e) => handleEducationChange(level, 'years', e.target.value)}
                />
              </div>
            ) : (
              <>
                <p className="text-gray-700"><strong>{data.degree}</strong></p>
                <p className="text-gray-500">{data.institution}</p>
                <p className="text-gray-500">{data.years}</p>
              </>
            )}
          </div>
        ))}
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

      {/* <div className="bg-white shadow rounded-lg p-4 mb-8">
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
      </div> */}

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
        <BasicForm closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default InfoSection