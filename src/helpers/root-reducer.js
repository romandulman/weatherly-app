import { combineReducers } from 'redux';
import  { WeatherReducer }  from '../components/weather/redux/Weather.reducer'

const RootReducer = combineReducers({
     WeatherReducer
    // another reducer
});
export  default RootReducer

// Added "combineReducers" for future app extension
