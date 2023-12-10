import {LOGIN_USER_SUCCESS,LOGIN__USER_FAIL} from '../constants/userConstant'

export const fetchUserDetails = (userData) => {
    return {
      type: LOGIN_USER_SUCCESS,
      data: userData,
    };
  };

  export const noteRefs = (e) =>{
    return {
      type: 'SET_REFRESH',
      data: e,
    };
  }