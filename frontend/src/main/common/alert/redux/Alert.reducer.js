import { alertConstants } from "./Alert.constants";

export function AlertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        message: action.payload.message
      };
    case alertConstants.ERROR:
      return {
        message: action.payload.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}