import { alertConstants } from "./Alert.constants";

export const alertActions = {
  success,
  error,
  clear,
  addedFavorite,
  removedFavorite
};

const removedFavorite = message => ({ type: alertConstants.ADDED_FAVORITE, payload: message });
const addedFavorite = message => ({ type: alertConstants.ADDED_FAVORITE, payload: message });
const success = message => ({ type: alertConstants.SUCCESS, payload: message });
const error = message => ({ type: alertConstants.SUCCESS, payload: message });
const clear = () => ({ type: alertConstants.CLEAR });
