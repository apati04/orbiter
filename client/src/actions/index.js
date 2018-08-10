import axios from 'axios';
import * as types from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: types.FETCH_USER_DATA, payload: data });
};

export const addNewUser = (values, callback) => async dispatch => {
  const request = await axios.post('/api/users', values);
  callback();
  dispatch({ type: types.ADD_NEW_USER, payload: request });
};
