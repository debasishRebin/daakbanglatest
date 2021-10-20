import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../Constants/UserConstants';
const initialState = {loading: false, userInfo: null, error: false};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true, userInfo: null, error: false};
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        error: false,
      };
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload, userInfo: null};
    case USER_LOGOUT:
      return {loading: false, userInfo: null, error: false};
    default:
      return state;
  }
};
