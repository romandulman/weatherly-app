import { WeatherConstants } from './Weather.constants';
import { reqCityWeather, getDailyForcasts, findCity} from '../api/Weather.api'



export const LoadWeatherAction = (key,city) => {
    return dispatch => {
        dispatch(fetchWeatherBegin());

        reqCityWeather(key).then(
            current=> {
                getDailyForcasts(key).then(
                    forcast => {
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


export const AddFavotiteAction = key => {
    return dispatch => {
        dispatch(AddToFavorites(key))
    };
};

export const RemoveFavoriteAction = city =>{
    return dispatch => {
        dispatch(RemoveFavorite(city))
    };
};

export const LoadFavoritesAction = () =>{
    return dispatch => {
        dispatch(LoadFavorites())
    };
};
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
    payload: { current, forcast }
});


const AddToFavorites = key => ({
    type: WeatherConstants.ADD_FAVORITE, key
});

const RemoveFavorite = city => ({
   type: WeatherConstants.REMOVE_FAVORITE, city
});

const LoadFavorites = () => ({
    type: WeatherConstants.LOAD_FAVORITES
});

