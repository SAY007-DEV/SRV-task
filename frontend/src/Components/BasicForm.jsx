import React, { useState } from 'react'
import axios from 'axios'
import useUserStore from './Store/userStore' // Update this path according to your project structure

function BasicForm({ closeModal }) {
  const updateUserInfo = useUserStore(state => state.updateUserInfo)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "+91",
    email: "",
    aadhar: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    guardianName: "",
    guardianNumber: "",
    gender: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Format the data for display
    const displayData = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      dateOfBirth: formData.dob,
      gender: formData.gender,
      mobile: formData.mobile,
      email: formData.email,
      aadhar: formData.aadhar,
      address: `${formData.address}, ${formData.district}, ${formData.state}, ${formData.pincode}`,
      mobileVerified: true,
      emailVerified: true,
      aadharVerified: false,
      // Add additional fields that might be needed in InfoSection
      guardianName: formData.guardianName,
      guardianNumber: formData.guardianNumber,
      state: formData.state,
      district: formData.district,
      pincode: formData.pincode
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users/data', displayData);
      
      if (response.status === 200) {
        // Update Zustand store instead of Redux
        updateUserInfo(response.data.data);
        
        console.log('Data saved successfully:', response.data);
        alert('Information updated successfully!');
        closeModal();
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data. Please try again.');
    }
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={handleCancel}>
                <i className="fas fa-times"></i>
            </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name<span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name<span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth<span className="text-red-500">*</span></label>
                    <input type="text" name="dob" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder='DD/MM/YYYY' value={formData.dob} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Gender<span className="text-red-500">*</span></label>
                    <div className="mt-1 flex space-x-2">
                        <button 
                            type="button" 
                            className={`border rounded-md px-4 py-2 ${formData.gender === 'Male' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700'}`} 
                            onClick={() => handleGenderChange('Male')}
                        >
                            Male
                        </button>
                        <button 
                            type="button" 
                            className={`border rounded-md px-4 py-2 ${formData.gender === 'Female' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700'}`} 
                            onClick={() => handleGenderChange('Female')}
                        >
                            Female
                        </button>
                        <button 
                            type="button" 
                            className={`border rounded-md px-4 py-2 ${formData.gender === 'Non-Binary' ? 'border-blue-500 text-blue-500' : 'border-gray-300 text-gray-700'}`} 
                            onClick={() => handleGenderChange('Non-Binary')}
                        >
                            Non-Binary
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile<span className="text-red-500">*</span></label>
                    <div className="relative mt-1">
                        <input type="text" name="mobile" className="block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.mobile} onChange={handleChange} required />
                        {formData.mobile.length === 13 && (
                            <i className="fas fa-check-circle text-green-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                        {(formData.mobile.length < 13 || formData.mobile.length > 13) && (
                            <i className="fas fa-exclamation-triangle text-yellow-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                    <div className="relative mt-1">
                        <input type="email" name="email" className="block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.email} onChange={handleChange} required />
                       
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Aadhar<span className="text-red-500">*</span></label>
                    <div className="relative mt-1">
                        <input type="text" name="aadhar" className="block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.aadhar} onChange={handleChange} required />
                        {formData.aadhar.length === 12 && (
                            <i className="fas fa-check-circle text-green-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                        {(formData.aadhar.length < 12 || formData.aadhar.length > 12) && (
                            <i className="fas fa-exclamation-triangle text-yellow-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address<span className="text-red-500">*</span></label>
                    <input type="text" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.address} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State<span className="text-red-500">*</span></label>
                    <select name="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.state} onChange={handleChange} required>
                        <option value="Kerala">Kerala</option>
                        <option value="karnadaka">Karnataka</option>
                        <option value="Tamilnadu">Tamilnadu</option>
                        
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">District<span className="text-red-500">*</span></label>
                    <input type="text" name="district" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.district} onChange={handleChange} required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Pincode<span className="text-red-500">*</span></label>
                    <div className="relative mt-1">
                        <input type="text" name="pincode" className="block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.pincode} onChange={handleChange} required />
                        {formData.pincode.length === 6 && (
                            <i className="fas fa-check-circle text-green-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                        {(formData.pincode.length < 6 || formData.pincode.length > 6) && (
                            <i className="fas fa-exclamation-triangle text-yellow-500 absolute right-2 top-1/2 transform -translate-y-1/2"></i>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Parent / Guardian Name</label>
                    <input type="text" name="guardianName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.guardianName} onChange={handleChange} placeholder="Name"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Parent / Guardian Number</label>
                    <input type="text" name="guardianNumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.guardianNumber} onChange={handleChange} placeholder="Mobile Number"/>
                </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
                <button type="button" className="bg-gray-200 text-gray-700 rounded-md px-4 py-2" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="bg-red-500 text-white rounded-md px-4 py-2">Save Changes</button>
            </div>
        </form>

    </div>
  )
}

export default BasicForm