import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersDataReducer from './users_data_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: usersDataReducer
});

export default rootReducer;
