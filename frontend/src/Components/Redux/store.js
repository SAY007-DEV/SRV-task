import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/useReducer.js';

const store = configureStore({
  reducer: {
    user: userReducer, // Assuming userReducer is managing user state
  },
});

export default store;
