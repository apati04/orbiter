import _ from 'lodash';
import axios from 'axios';
import debounce from 'debounce-promise';

const asyncValidate = async values => {
  const request = await axios.get('/api/users');
  const { data } = request;
  if (_.map(data).find(user => user.username === values.username)) {
    throw { username: 'Username is already taken'};
  }
};

export default debounce(asyncValidate, 500);
