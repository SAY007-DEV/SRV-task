// frontend/src/Components/Redux/userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    dob: '',
    mobile: '',
    email: '',
    aadhar: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    guardianName: '',
    guardianNumber: '',
    gender: '',
  },
  reducers: {
    updateUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserInfo } = userSlice.actions;
export default userSlice.reducer;