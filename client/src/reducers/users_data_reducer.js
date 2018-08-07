import { FETCH_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
  users: {}
};

function usersDataReducer(state = INITIAL_STATE, action) {
  switch (FETCH_USER_DATA) {
    case action.type:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default usersDataReducer;
