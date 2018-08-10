import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allUsersDataReducer from './all_users_data_reducer';
import addNewUsersReducer from './add_new_users_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: allUsersDataReducer,
  newUsers: addNewUsersReducer
});

export default rootReducer;
