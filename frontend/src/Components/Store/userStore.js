import { create } from 'zustand'

const useUserStore = create((set) => ({
  userInfo: {
    fullName: "",
    dateOfBirth: "",
    gender: "",
    mobile: "",
    email: "",
    aadhar: "",
    address: "",
    guardianName: "",
    guardianNumber: "",
    mobileVerified: false,
    emailVerified: false,
    aadharVerified: false,
  },
  updateUserInfo: (data) => set({ userInfo: data }),
}))

export default useUserStore 