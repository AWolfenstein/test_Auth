import  {LOGIN_SUCCESS,LOGIN_FAIL, USER_LOGOUT,GET_PROFILE} from "../actions/authAction"
const token = JSON.parse(localStorage.getItem("token"));

const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: payload.token,
      };
      case GET_PROFILE:
        return {
          ...state,
          isLoggedIn: true,
          user: payload,
        };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}