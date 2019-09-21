import { combineReducers } from 'redux';
import  { WeatherReducer,FavoritesReducer }    from '../features'
import {AlertReducer} from "../main/common/alert/redux/Alert.reducer";

const RootReducer = combineReducers({
    WeatherReducer,
    FavoritesReducer,
    AlertReducer
});

/*const RootReducer = (state = {}, action) => {
     const d = state.WeatherReducer
     return {
          WeatherReducer: WeatherReducer(state.WeatherReducer, action),
          FavoritesReducer: FavoritesReducer(state.FavoritesReducer, {...action, d}),
     };
};*/

export  default RootReducer

