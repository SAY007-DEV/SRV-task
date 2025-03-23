import { useState, useEffect } from 'react';
import useUserStore from '../Store/userStore';

function ProfileModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useUserStore();

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        document.addEventListener('openProfileModal', handleOpen);
        return () => document.removeEventListener('openProfileModal', handleOpen);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <div className="flex justify-end">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                {/* Profile Content */}
                <div className="space-y-6">
                    {/* Header with Avatar */}
                    <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-600">
                                {currentUser?.firstName?.charAt(0) || currentUser?.fullName?.charAt(0) || 'U'}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">
                                {currentUser?.fullName || `${currentUser?.firstName || ''} ${currentUser?.lastName || ''}`}
                            </h2>
                            <p className="text-gray-600">{currentUser?.email}</p>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="text-gray-600 text-sm">Email</label>
                                    <p className="font-medium">{currentUser?.email || 'Not provided'}</p>
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm">Mobile</label>
                                    <p className="font-medium">{currentUser?.mobile || 'Not provided'}</p>
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm">Date of Birth</label>
                                    <p className="font-medium">{currentUser?.dob || currentUser?.dateOfBirth || 'Not provided'}</p>
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm">Gender</label>
                                    <p className="font-medium">{currentUser?.gender || 'Not provided'}</p>
                                </div>
                                <div>
                                    <label className="text-gray-600 text-sm">Address</label>
                                    <p className="font-medium">{currentUser?.address || 'Not provided'}</p>
                                </div>
                                {currentUser?.guardianName && (
                                    <div>
                                        <label className="text-gray-600 text-sm">Guardian</label>
                                        <p className="font-medium">{currentUser.guardianName}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Verification Status */}
                        <div>
                            <h3 className="text-lg font-semibold mb-3">Verification Status</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <span className={`w-3 h-3 rounded-full mr-2 ${currentUser?.mobileVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                    <span>Mobile {currentUser?.mobileVerified ? 'Verified' : 'Pending'}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className={`w-3 h-3 rounded-full mr-2 ${currentUser?.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                    <span>Email {currentUser?.emailVerified ? 'Verified' : 'Pending'}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className={`w-3 h-3 rounded-full mr-2 ${currentUser?.aadharVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                    <span>Aadhar {currentUser?.aadharVerified ? 'Verified' : 'Pending'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal; 