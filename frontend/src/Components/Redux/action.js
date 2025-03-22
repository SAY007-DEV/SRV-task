// frontend/src/redux/actions.js
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export const updateUserInfo = (userInfo) => ({
  type: UPDATE_USER_INFO,
  payload: userInfo,
});