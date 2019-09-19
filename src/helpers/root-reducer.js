import { combineReducers } from 'redux';
import  { WeatherReducer,FavoritesReducer }    from '../features'

const RootReducer = combineReducers({
    WeatherReducer,
    FavoritesReducer
    // another reducer
});

/*const RootReducer = (state = {}, action) => {
     const d = state.WeatherReducer
     return {
          WeatherReducer: WeatherReducer(state.WeatherReducer, action),
          FavoritesReducer: FavoritesReducer(state.FavoritesReducer, {...action, d}),
     };
};*/

export  default RootReducer

// Added "combineReducers" for future app extension
