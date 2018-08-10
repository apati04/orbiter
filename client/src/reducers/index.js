import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer
});

export default rootReducer;
