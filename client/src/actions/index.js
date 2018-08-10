import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_ALL_USERS_DATA, payload: data });
};

const requestNewUsersRegistration = () => ({
  type: types.REQUEST_NEW_USERS_REGISTRATION,
  payload: true
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
  }
  callback();
};
