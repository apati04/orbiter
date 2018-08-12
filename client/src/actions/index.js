import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const requestNewUsersRegistration = () => ({
  type: types.REQUEST_NEW_USERS_REGISTRATION,
  payload: false
});

const receiveNewUsersRegistration = () => ({
  type: types.RECEIVE_NEW_USERS_REGISTRATION,
  payload: true
});

export const addNewUsers = (values, callback) => async dispatch => {
  dispatch(requestNewUsersRegistration());
  const request = await axios.post('/api/users', values);
  if (request.status === 200) {
    dispatch(receiveNewUsersRegistration());
    callback();
  }
};

export const resetNewUsersRegistration = () => ({
  type: types.RESET_NEW_USERS_REGISTRATION
});

export const authRequest = () => {
  return {
    type: types.AUTH_REQUEST
  };
};

export const authSuccess = data => {
  return { type: types.AUTH_SUCCESS, data };
};

export const authFail = error => {
  return {
    type: types.AUTH_FAIL,
    error
  };
};

export const authUser = (email, password) => {
  return dispatch => {
    dispatch(authRequest());
    const dataObj = {
      email,
      password,
      returnSecureToken: true
    };
    axios.post('/api/auth', dataObj).then(response => {
      console.log('ac: ', response);
    });
  };
};
