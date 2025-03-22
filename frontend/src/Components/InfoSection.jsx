import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BasicForm from './BasicForm'
import Modal from './Modal'

function InfoSection() {
  const userInfo = useSelector((state) => state.user)
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
            Basic Information
          </h2>
          <button 
            className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
            onClick={handleUpdateClick}
          >
            Update
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Full Name</p>
                    <p>{userInfo.fullName}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Date of Birth</p>
                    <p>{userInfo.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Gender</p>
                    <p>{userInfo.gender}</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">Mobile</p>
                    <p className="flex items-center">
                      {userInfo.mobile || '+91 9876543210'}
                      {userInfo.mobileVerified && (
                        <i className="fas fa-check-circle text-green-500 ml-2"></i>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="flex items-center">
                      {userInfo.email || 'abhishekshankar123@gmail.com'}
                      {userInfo.emailVerified && (
                        <i className="fas fa-check-circle text-green-500 ml-2"></i>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Aadhar</p>
                <p className="flex items-center">
                  {userInfo.aadhar || 'Not specified'}
                  {!userInfo.aadharVerified && (
                    <button className="bg-red-500 text-white px-2 py-1 rounded-lg ml-2">
                      Verify
                    </button>
                  )}
                </p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p>{userInfo.address || 'Not specified'}</p>
              </div>
            </div>
          </div>

          {/* dummy info */}
          <div>
            <div className="bg-white p-4 rounded-lg border">
              <ul className="space-y-2">
                <li className="flex items-center">
                  {/* <input checked="" className="mr-2" name="section" type="radio"/> */}
                  <span className="font-semibold">
                    Basic Information
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Education
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Career Objective
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Key Skills
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Resume/Portfolio
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Preferences
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Work Experience
                  </span>
                </li>
                <li className="flex items-center">
                  <input className="mr-2" name="section" type="radio"/>
                  <span>
                    Additional Documents
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-green-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <img alt="Payment Pending Icon" className="mr-4" src="https://placehold.co/50x50"/>
            <div>
              <p className="font-semibold">
                Payment Pending
              </p>
              <p>
                Registration fee 500 rupees pending. Pay now and get access to all services.
              </p>
            </div>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg" >
            Pay Now
          </button>
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
        <BasicForm closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default InfoSection