import axios from 'axios';
import { FETCH_USER_DATA } from './types';

export const fetchUserData = () => async dispatch => {
  const request = await axios.get('/api/users');
  const { data } = request;
  dispatch({ type: FETCH_USER_DATA, payload: data });
};
