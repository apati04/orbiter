import { REQUEST_NEW_USER_REGISTRATION, RECEIVE_NEW_USER_REGISTRATION } from '../actions/types';

const INITIAL_STATE = {
  isCreating: false,
  isCreated: false
};

function addNewUsersReducer(state = INITIAL_STATE, action) {
  switch (action.payload) {
    case REQUEST_NEW_USER_REGISTRATION:
      return {
        ...state,
        isCreating: action.payload
      };
    case RECEIVE_NEW_USER_REGISTRATION:
      return {
        ...state,
        isCreating: false,
        isCreated: action.payload
      };
    default:
      return state;
  }
};

export default addNewUsersReducer;
