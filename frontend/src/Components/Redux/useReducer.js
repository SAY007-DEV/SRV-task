
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      mobile: '',
      email: '',
      aadhar: '',
      address: '',
      mobileVerified: false,
      emailVerified: false,
      aadharVerified: false,
      guardianName: '',
      guardianNumber: '',
      state: '',
      district: '',
      pincode: ''
    }
  },
  reducers: {
    updateUserInfo: (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      };
    },
  },
});

export const { updateUserInfo } = userSlice.actions;
export default userSlice.reducer;