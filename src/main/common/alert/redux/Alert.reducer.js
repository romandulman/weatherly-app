import { alertConstants } from "./Alert.constants";

export function AlertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        message: action.payload.message,
        open: true
      };
    case alertConstants.ERROR:
      return {
        message: action.payload.message,
        open: true
      };
    case alertConstants.CLEAR:
      return {
        open: false
      };
    default:
      return state;
  }
}
