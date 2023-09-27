import * as types from '../actions/actionType';

const initialState = {
  allUsers: [],
  singleUser: {},
  isLoading: false,
  isError: true,
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default usersReducers;
