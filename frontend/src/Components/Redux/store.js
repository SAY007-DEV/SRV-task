import { configureStore } from '@reduxjs/toolkit';
import userReducer from './useReducer';

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
