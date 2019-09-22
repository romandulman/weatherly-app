import { alertConstants } from "./Alert.constants";


const alertSuccess = message => ({
  type: alertConstants.SUCCESS,
  payload: { message }
});
const alertError = message => ({
  type: alertConstants.ERROR,
  payload: { message }
});
const alertClear = () => ({ type: alertConstants.CLEAR });

export {
  alertSuccess,
  alertError,
  alertClear
};
