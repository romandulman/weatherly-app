import { WeatherConstants } from './Weather.constants';
import { reqCityWeather, getDailyForcasts,getWeatherByGeo} from '../api/Weather.api'
import {AddFavotiteAction, RemoveFavoriteAction} from '../sub-features/favorites.sub-feature/redux/Favorites.actions'
import { getCurrentPosition } from "../../../utils/geo.util";

import {
    alertSuccess,
    alertError,
    alertClear,
    alertAddedFavorite,
    alertRemovedFavorite
} from '../../../main/common/alert/redux/Alert.actions'


export const LoadWeatherAction = (id, city, fav) => {
  return dispatch => {
    dispatch(fetchWeatherBegin());
    reqCityWeather(id).then(
      current => {
        getDailyForcasts(id).then(forcast => {
          dispatch(loadWeatherData(current, forcast, city, id, fav));
        });
      },
      error => {
        dispatch(fetchWeatherFailure(error));
        dispatch(alertError(error));
      }
    );
  };
};

export const LoadCurrentLocationWeather = () => {
  return dispatch => {
    getCurrentPosition().then(
      coords => {
        getWeatherByGeo(coords.latitude, coords.longitude).then(location => {
          console.log(location);
        });
      },
      error => {
        dispatch(
          alertError("Cannot get Geo Location, Setting default Location...")
        );
      }
    );
  };
};

export const HandleFavorite =(handle,isFavorite)=>{
    return dispatch =>{
     //   if (handle){
        if(!isFavorite){
            dispatch(AddFavotiteAction(handle));
            dispatch(TagFavorite(handle.city))
            dispatch(alertSuccess("Added to Favorites"));
        }else{
           dispatch(RemoveFavoriteAction(handle.city))
           dispatch(UntagFavorite(handle.city))
            dispatch(alertSuccess("Removed to Favorites"));

        }
    }
}

export const LoadFavoiteAction = favData =>{

    return dispatch =>{
        dispatch(loadFavorite(favData))

    }
};

///////////////////////////////////////////////////////


const fetchWeatherBegin = () => ({
    type: WeatherConstants.FETCH_WEATHER_BEGIN
});

const fetchWeatherFailure  = error => ({
    type: WeatherConstants.FETCH_WEATHER_FAILURE,
    payload: { error }
});


const loadWeatherData = (current,forcast,city,id,fav) => ({
    type: WeatherConstants.FETCH_WEATHER_SUCCESS,
    payload: { current, forcast ,city, id, fav }
});

const TagFavorite = (city) =>({
    type: WeatherConstants.TAG_FAVORITE,
    payload:{city}
});

const UntagFavorite = (city) =>({
    type: WeatherConstants.UNTAG_FAVORITE,
    payload:{city}
});

const loadFavorite = favData =>({
    type: WeatherConstants.LOAD_FAVOTITE,
    payload: {favData}

});
