import React, { useState } from 'react'
import useUserStore from './Store/userStore.js' 
import BasicForm from './BasicForm'
import Modal from './Modal'
import Right from './Right.jsx'

function InfoSection() {
  const userInfo = useUserStore(state => state.userInfo)
  const updateUserInfo = useUserStore(state => state.updateUserInfo)
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

  const [isCareerEditing, setIsCareerEditing] = useState(false)
  const [isSkillsEditing, setIsSkillsEditing] = useState(false)
  const [isPortfolioEditing, setIsPortfolioEditing] = useState(false)
  
  const [careerObjective, setCareerObjective] = useState(userInfo.careerObjective || {
    title: "For Entry-Level Position",
    description: "Enthusiastic and highly motivated graduate..."
  })
  
  const [skills, setSkills] = useState(userInfo.skills || [])
  const [newSkill, setNewSkill] = useState("")
  
  const [portfolio, setPortfolio] = useState(userInfo.portfolio || {
    github: "",
    behance: "",
    website: ""
  })

  console.log('Current userInfo:', userInfo);

  const handleUpdateClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleEducationUpdate = async () => {
    try {
     
      const response = await fetch('https://server-task-ex4s.onrender.com/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData)
      });

      if (response.ok) {
        setIsEducationEditing(false);
       
      } else {
        throw new Error('Failed to update education');
      }
    } catch (error) {
      console.error('Error updating education:', error);
      
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

  const handleCareerSave = () => {
    updateUserInfo({ careerObjective })
    setIsCareerEditing(false)
  }

  const handleAddSkill = (e) => {
    e.preventDefault()
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
  }

  const handleSkillsSave = () => {
    updateUserInfo({ skills })
    setIsSkillsEditing(false)
  }


  const handlePortfolioSave = () => {
    updateUserInfo({ portfolio })
    setIsPortfolioEditing(false)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:mt-6 max-w-7xl mx-auto w-full">
     
      <div className="flex-1">
        
        <div className="bg-white shadow rounded-lg p-6 mb-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">
              Basic Information
            </h2>
            <button 
              className="w-full sm:w-auto bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
              onClick={handleUpdateClick}
            >
              Update
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          
         
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6">Verification Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

       
        <div className="bg-white shadow rounded-lg p-6 mb-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">Education</h2>
            {isEducationEditing ? (
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg"
                  onClick={handleEducationUpdate}
                >
                  Save
                </button>
                <button 
                  className="w-full sm:w-auto bg-gray-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsEducationEditing(false)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button 
                className="w-full sm:w-auto bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                onClick={() => setIsEducationEditing(true)}
              >
                Update Education
              </button>
            )}
          </div>

          <div className="space-y-6">
            {Object.entries(educationData).map(([level, data]) => (
              <div key={level} className="border-b pb-4 last:border-b-0">
                {isEducationEditing ? (
                  <div className="space-y-3">
                    <input
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                      value={data.degree}
                      onChange={(e) => handleEducationChange(level, 'degree', e.target.value)}
                    />
                    <input
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                      value={data.institution}
                      onChange={(e) => handleEducationChange(level, 'institution', e.target.value)}
                    />
                    <input
                      className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                      value={data.years}
                      onChange={(e) => handleEducationChange(level, 'years', e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-gray-700 font-semibold">{data.degree}</p>
                    <p className="text-gray-600">{data.institution}</p>
                    <p className="text-gray-500">{data.years}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">Career Objective</h2>
            <button 
              className="w-full sm:w-auto text-blue-500 px-4 py-2 rounded-lg"
              onClick={() => setIsCareerEditing(!isCareerEditing)}
            >
              {isCareerEditing ? 'Cancel' : 'Update'}
            </button>
          </div>
          {isCareerEditing ? (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                value={careerObjective.title}
                onChange={(e) => setCareerObjective({...careerObjective, title: e.target.value})}
                placeholder="Position Title"
              />
              <textarea
                className="w-full p-3 border rounded h-32 focus:ring-2 focus:ring-blue-500"
                value={careerObjective.description}
                onChange={(e) => setCareerObjective({...careerObjective, description: e.target.value})}
                placeholder="Career Objective Description"
              />
              <button 
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded"
                onClick={handleCareerSave}
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-gray-700 font-semibold">{careerObjective.title}</p>
              <p className="text-gray-600">{careerObjective.description}</p>
            </div>
          )}
        </div>

        {/* Skills Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">Key Skills</h2>
            <button 
              className="w-full sm:w-auto text-blue-500 px-4 py-2 rounded-lg"
              onClick={() => setIsSkillsEditing(!isSkillsEditing)}
            >
              {isSkillsEditing ? 'Cancel' : 'Update Skills'}
            </button>
          </div>
          {isSkillsEditing ? (
            <div className="space-y-4">
              <form onSubmit={handleAddSkill} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  className="flex-1 p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add new skill"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded"
                >
                  Add
                </button>
              </form>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full text-sm flex items-center gap-2"
                  >
                    {skill}
                    <button 
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button 
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded"
                onClick={handleSkillsSave}
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Portfolio Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-8 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-xl font-semibold mb-2 sm:mb-0">Portfolio</h2>
            <button 
              className="w-full sm:w-auto text-blue-500 px-4 py-2 rounded-lg"
              onClick={() => setIsPortfolioEditing(!isPortfolioEditing)}
            >
              {isPortfolioEditing ? 'Cancel' : 'Update Portfolio'}
            </button>
          </div>
          {isPortfolioEditing ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">GitHub</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  value={portfolio.github}
                  onChange={(e) => setPortfolio({...portfolio, github: e.target.value})}
                  placeholder="GitHub URL"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Behance</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  value={portfolio.behance}
                  onChange={(e) => setPortfolio({...portfolio, behance: e.target.value})}
                  placeholder="Behance URL"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Personal Website</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  value={portfolio.website}
                  onChange={(e) => setPortfolio({...portfolio, website: e.target.value})}
                  placeholder="Website URL"
                />
              </div>
              <button 
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded"
                onClick={handlePortfolioSave}
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-gray-700 font-semibold">GitHub</p>
                <p className="text-gray-600 break-all">{portfolio.github}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-700 font-semibold">Behance</p>
                <p className="text-gray-600 break-all">{portfolio.behance}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-700 font-semibold">Personal Website</p>
                <p className="text-gray-600 break-all">{portfolio.website}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right sidebar */}
      <div className="hidden lg:block lg:w-1/4">
        <Right />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BasicForm closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default InfoSection