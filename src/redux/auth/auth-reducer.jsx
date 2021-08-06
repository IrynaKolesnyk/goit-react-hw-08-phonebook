import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, action) => action.payload,
});
const token = createReducer(null, {
  [registerSuccess]: (_, action) => action.payload.user,
  [loginSuccess]: (_, action) => action.payload.user,
});
const error = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [loginError]: (_, action) => action.payload,
  [logoutError]: (_, action) => action.payload,
  [getCurrentUserError]: (_, action) => action.payload,
});

export default combineReducers({
  user,
  token,
  error,
});
