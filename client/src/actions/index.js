import axios from 'axios';
import { FETCH_USER_DATA, ADD_NEW_USER } from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: FETCH_USER_DATA, payload: data });
};

export const addNewUser = values => async dispatch => {
  const request = await axios.post('/api/add/users', {
    params: {
      values
    }
  });
  dispatch({ type: ADD_NEW_USER, payload: request });
};
