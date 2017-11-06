import { AUTH_USER, UNAUTH_USER, ERROR } from "../actions/types";

const INITIALSTATE = {
  authenticated: false,
  messageError: ""
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, messageError: "" };
    case UNAUTH_USER:
      return INITIALSTATE;
    case ERROR:
      return { ...state, messageError: action.payload.message };
    default:
      return state;
  }
}
