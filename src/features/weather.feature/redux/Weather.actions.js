import { WeatherConstants } from './Weather.constants';
import { reqCityWeather, getDailyForcasts} from '../api/Weather.api'
import {AddFavotiteAction, RemoveFavoriteAction} from '../sub-features/favorites.sub-feature/redux/Favorites.actions'


export const LoadWeatherAction = (key,city) => {

    return dispatch => {
        dispatch(fetchWeatherBegin());

        reqCityWeather(key).then(
            current=> {
                getDailyForcasts(key).then(

                    forcast => {
                        console.log(forcast)
                        dispatch(loadWeatherData(current,forcast,city));
                    })
            },
             error => {
                  dispatch(fetchWeatherFailure(error));
                //dispatch(alertActions.error(error));
            }
        )


    };
};

export const HandleFavorite =(handle)=>{
    return dispatch =>{
     //   if (handle){
            dispatch(AddFavotiteAction(handle))

      //  }else{
          //  dispatch(RemoveFavoriteAction())
      //  }
    }
}



///////////////////////////////////////////////////////


const fetchWeatherBegin = () => ({
    type: WeatherConstants.FETCH_WEATHER_BEGIN
});

const fetchWeatherFailure  = error => ({
    type: WeatherConstants.FETCH_WEATHER_FAILURE,
    payload: { error }
});


const loadWeatherData = (current,forcast,city) => ({
    type: WeatherConstants.FETCH_WEATHER_SUCCESS,
    payload: { current, forcast ,city }
});



