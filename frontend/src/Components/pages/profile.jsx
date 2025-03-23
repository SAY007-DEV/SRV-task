import { useState, useEffect } from 'react';
import useUserStore from '../Store/userStore'; // Update path as needed
import Modal from '../Modal'; // Update path as needed

function Profile() {
    const { 
        users, 
        selectedUser, 
        loading, 
        error,
        fetchUsers, 
        setSelectedUser 
    } = useUserStore();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    console.log('Users:', users); // Debugging log

    // Add this debug section to display raw state data
    const renderDebugSection = () => (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Debug Information</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold">Loading State:</h3>
                    <pre className="bg-white p-2 rounded">
                        {JSON.stringify({ loading }, null, 2)}
                    </pre>
                </div>
                
                <div>
                    <h3 className="font-semibold">Error State:</h3>
                    <pre className="bg-white p-2 rounded">
                        {JSON.stringify({ error }, null, 2)}
                    </pre>
                </div>
                
                <div>
                    <h3 className="font-semibold">Selected User:</h3>
                    <pre className="bg-white p-2 rounded">
                        {JSON.stringify(selectedUser, null, 2)}
                    </pre>
                </div>
                
                <div>
                    <h3 className="font-semibold">All Users:</h3>
                    <pre className="bg-white p-2 rounded overflow-auto max-h-96">
                        {JSON.stringify(users, null, 2)}
                    </pre>
                </div>
            </div>
            
            <button 
                onClick={() => fetchUsers()}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Refresh Data
            </button>
        </div>
    );

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return (
        <div className="container mx-auto p-4">
            <div className="text-center p-4 text-red-500">Error: {error}</div>
            {renderDebugSection()}
        </div>
    );
    if (!users || users.length === 0) return (
        <div className="container mx-auto p-4">
            <div className="text-center p-4">No users found</div>
            {renderDebugSection()}
        </div>
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profiles ({users.length})</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div 
                        key={user._id || Math.random()} 
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="p-4">
                            {/* User Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-xl font-bold text-blue-600">
                                            {user.firstName?.charAt(0) || user.fullName?.charAt(0) || 'U'}
                                        </span>
                                    </div>
                                    <div className="ml-4">
                                        <h2 className="text-xl font-semibold">
                                            {user.fullName || `${user.firstName || ''} ${user.lastName || ''}`}
                                        </h2>
                                        <p className="text-gray-600">{user.email || 'No email'}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="space-y-2 mb-4">
                                <p className="flex items-center text-gray-600">
                                    <span className="mr-2">📱</span>
                                    {user.mobile || 'No mobile'}
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <span className="mr-2">📍</span>
                                    {user.address || 'No address'}
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <span className="mr-2">🎂</span>
                                    {user.dob || user.dateOfBirth || 'No DOB'}
                                </p>
                                <p className="flex items-center text-gray-600">
                                    <span className="mr-2">👤</span>
                                    {user.gender || 'No gender'}
                                </p>
                                {user.guardianName && (
                                    <p className="flex items-center text-gray-600">
                                        <span className="mr-2">👥</span>
                                        Guardian: {user.guardianName}
                                    </p>
                                )}
                            </div>

                            {/* Verification Status */}
                            <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Verification Status</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${user.mobileVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Mobile {user.mobileVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${user.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Email {user.emailVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${user.aadharVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Aadhar {user.aadharVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Add debug section at the bottom */}
            {renderDebugSection()}
            
            {/* Details Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedUser && (
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">
                                {selectedUser.fullName || `${selectedUser.firstName} ${selectedUser.lastName}`}
                            </h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Personal Information */}
                            <div>
                                <h3 className="font-semibold mb-2">Personal Information</h3>
                                <div className="space-y-2">
                                    <p><span className="font-medium">Email:</span> {selectedUser.email || 'Not provided'}</p>
                                    <p><span className="font-medium">Mobile:</span> {selectedUser.mobile || 'Not provided'}</p>
                                    <p><span className="font-medium">Date of Birth:</span> {selectedUser.dob || selectedUser.dateOfBirth || 'Not provided'}</p>
                                    <p><span className="font-medium">Gender:</span> {selectedUser.gender || 'Not provided'}</p>
                                    <p><span className="font-medium">Address:</span> {selectedUser.address || 'Not provided'}</p>
                                    {selectedUser.guardianName && (
                                        <p><span className="font-medium">Guardian:</span> {selectedUser.guardianName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Verification Status */}
                            <div>
                                <h3 className="font-semibold mb-2">Verification Status</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${selectedUser.mobileVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Mobile {selectedUser.mobileVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${selectedUser.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Email {selectedUser.emailVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`w-3 h-3 rounded-full mr-2 ${selectedUser.aadharVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span>Aadhar {selectedUser.aadharVerified ? 'Verified' : 'Pending'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Profile;