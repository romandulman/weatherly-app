import { alertConstants } from "./Alert.constants";

export {
  alertSuccess,
    alertError,
    alertClear,
    alertAddedFavorite,
    alertRemovedFavorite
};

const alertRemovedFavorite = message => ({ type: alertConstants.ADDED_FAVORITE, payload: {message} });
const alertAddedFavorite = message => ({ type: alertConstants.ADDED_FAVORITE, payload: message });
const alertSuccess = message => ({ type: alertConstants.SUCCESS, payload:{message} });
const alertError = message => ({ type: alertConstants.SUCCESS, payload: {message} });
const alertClear = () => ({ type: alertConstants.CLEAR });
