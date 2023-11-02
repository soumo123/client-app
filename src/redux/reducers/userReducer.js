import { LOGIN_USER_SUCCESS,LOGIN__USER_FAIL} from "../constants/userConstant";
  
  const initialState = {
    user: [],
    error: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_SUCCESS:
        return { ...state, user: action.data};
      case LOGIN__USER_FAIL:
        return { ...state, user: action.data};
      default:
        return state;
    }
  }

  export default userReducer;