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
                items: { current: action.payload.current, forcast: action.payload.forcast}
            };

        case WeatherConstants.FETCH_WEATHER_FAILURE:

            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        case WeatherConstants.ADD_FAVORITE:
            console.log(state.favItems);
            return {
                ...state,
                items: { current: state.items.current, forcast: state.items.forcast},
                isFavorite: true,
                favItems: [...state.favItems, state.items]
            };
        case WeatherConstants.REMOVE_FAVORITE:
            return {
                ...state,
                items: { current: state.items.current, forcast: state.items.forcast},
                isFavorite: false,
                favItems: [
                    ...state.favItems.slice(0, 1),
                   // ...state.favItems.slice(state.favItems + 1)
                ],
            };

        case WeatherConstants.LOAD_FAVORITES:
            return {
                ...state,
                favItems: [
                    ...state.favItems
                ],
            };
        default:
            return state
    }
};
