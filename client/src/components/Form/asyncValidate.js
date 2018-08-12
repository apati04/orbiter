import _ from 'lodash';
import axios from 'axios';

const asyncValidate = async values => {
  const request = await axios.get('/api/users');
  const { data } = request;
  if (_.map(data).find(user => user.username === values.username)) {
    throw { username: 'Username is already taken' };
  }
};

export default asyncValidate;
