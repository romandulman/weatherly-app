import {WeatherConstants} from './Weather.constants'

const initState = {
    items: [],
    loading: false,
    error: null,
    isFavorite: false,
    favItems:[]
};

export const WeatherReducer = (state=initState, action) => {
    switch (action.type) {

        case WeatherConstants.FETCH_WEATHER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case WeatherConstants.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                items: { current: action.payload.current, forcast: action.payload.forcast, city: action.payload.city}
            };

        case WeatherConstants.FETCH_WEATHER_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };



        default:
            return state
    }
};
