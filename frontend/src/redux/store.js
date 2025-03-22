import { createStore } from 'redux';

const initialState = {
  user: {
    fullName: 'Abhishek Shankar',
    dateOfBirth: '18/10/1999',
    gender: 'Male',
    mobile: '+91 9876543210',
    email: 'abhisheksankar123@gmail.com',
    aadhar: '33XX XXXX XXXX XX22',
    address: 'Sweet Home, Evergreen Street, Varkkala, Thiruvananthapuram, Kerala, 695001, India',
    mobileVerified: true,
    emailVerified: true,
    aadharVerified: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export const store = createStore(reducer); 