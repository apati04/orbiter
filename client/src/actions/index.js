import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const requestNewUserRegistration = () => ({
  type: types.REQUEST_NEW_USER_REGISTRATION,
  payload: true
});

const receiveNewUserRegistration = request => ({
  type: types.RECEIVE_NEW_USER_REGISTRATION,
  payload: request
});

export const addNewUser = (values, callback) => async dispatch => {
  dispatch(requestNewUserRegistration());
  const request = await axios.post('/api/users', values);
  dispatch(receiveNewUserRegistration(request));
  callback();
};
