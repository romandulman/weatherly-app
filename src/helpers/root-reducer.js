import { combineReducers } from "redux";
import { WeatherReducer, FavoritesReducer } from "../features";
import { AlertReducer } from "../main/common/alert/redux/Alert.reducer";

const RootReducer = combineReducers({
  WeatherReducer,
  FavoritesReducer,
  AlertReducer
});

export default RootReducer;
