import { create } from 'zustand'
import axios from 'axios'

const useUserStore = create((set) => ({
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  userInfo: {
    fullName: "",
    username: "",
    mobile: "",
    email: "",
    address: "",
    profileCompletion: 60,
    careerObjective: {
      title: "For Entry-Level Position",
      description: "Enthusiastic and highly motivated graduate..."
    },
    skills: [
      "Communication", "UI Designing", "UI Development", 
      "Leadership", "Human Resource", "php", 
      "Accounting", "Data Science"
    ],
    portfolio: {
      github: "https://github.com/abhishekshankar",
      behance: "https://www.behance.net/abhishekshankar",
      website: "http://www.abhishekshankar.info"
    }
  },
  
  setUsers: (users) => set({ users }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      const userData = Array.isArray(response.data) ? response.data : [response.data];
      set({ users: userData, loading: false });
    } catch (error) {
      console.error('Error fetching users:', error);
      set({ error: error.message, loading: false });
    }
  },

  updateUserInfo: (data) => set(state => ({
    userInfo: { ...state.userInfo, ...data }
  })),
}));

export default useUserStore; 