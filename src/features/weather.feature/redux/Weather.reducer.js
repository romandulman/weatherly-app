import { WeatherConstants } from "./Weather.constants";

const initState = {
  items: [],
  loading: false,
  error: null,
  isFavorite: false,
  favItemsList: []
};

export const WeatherReducer = (state = initState, action) => {
  switch (action.type) {
    case WeatherConstants.FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case WeatherConstants.FETCH_WEATHER_SUCCESS:
      var found = state.favItemsList.find(function(element) {
        return element === action.payload.city;
      });

      return {
        ...state,
        loading: false,
        items: {
          current: action.payload.current,
          forcast: action.payload.forcast,
          city: action.payload.city,
          idKey: action.payload.id
        },
        isFavorite: found === action.payload.city //action.payload.fav
      };

    case WeatherConstants.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case WeatherConstants.TAG_FAVORITE:
      return {
        ...state,
        isFavorite: !state.isFavorite,
        favItemsList: [...state.favItemsList, action.payload.city]
      };

    case WeatherConstants.UNTAG_FAVORITE:
      const data = state.favItemsList.filter(function(item) {
        return !item.includes(action.payload.city);
      });
      return {
        ...state,
        isFavorite: !state.isFavorite,
        favItemsList: data
      };

    case WeatherConstants.LOAD_FAVOTITE:
      return {
        items: action.items
      };

    default:
      return state;
  }
};
