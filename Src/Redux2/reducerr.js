import { LOGOUT, LOGIN } from "./actionn";

const initialState = {
  isauth: false,
  user: null,
};

const cartReducerr = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isauth: true,
        user: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default cartReducerr;