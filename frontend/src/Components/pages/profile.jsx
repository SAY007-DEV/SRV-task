import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                const userData = Array.isArray(response.data) ? response.data : [response.data];
                setUsers(userData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    if (!Array.isArray(users)) {
        return <div>Error: Invalid data format</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.length === 0 ? (
                    <div>No users found</div>
                ) : (
                    users.map((user) => (
                        <div key={user._id || Math.random()} className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-xl font-semibold mb-2">{user.fullName}</h2>
                            <div className="space-y-2">
                                <p><span className="font-medium">Email:</span> {user.email}</p>
                                <p><span className="font-medium">Mobile:</span> {user.mobile}</p>
                                <p><span className="font-medium">Date of Birth:</span> {user.dateOfBirth}</p>
                                <p><span className="font-medium">Gender:</span> {user.gender}</p>
                                <p><span className="font-medium">Address:</span> {user.address}</p>
                                
                                {/* Education Section */}
                                <div className="mt-4">
                                    <h3 className="font-medium">Education:</h3>
                                    {user.education && Array.isArray(user.education) && user.education.map((edu, index) => (
                                        <div key={index} className="ml-4 mt-2">
                                            <p className="font-medium">{edu.degree}</p>
                                            <p className="text-sm text-gray-600">{edu.institution}</p>
                                            <p className="text-sm text-gray-600">{edu.years}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Profile;