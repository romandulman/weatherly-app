import { WeatherConstants } from "./Weather.constants";
import {
  isSavedPersist,
  loadState,
  lsConst,
  saveState
} from "../../../utils/local-storage";

const initFavItemsList = () => {
  if (isSavedPersist(lsConst.WTHRLY_FAV_KEYS)) {
    saveState([], lsConst.WTHRLY_FAV_KEYS);
    return [];
  } else {
    return loadState(lsConst.WTHRLY_FAV_KEYS);
  }
};

const initState = {
  items: [],
  loading: false,
  isFavorite: false,
  favItemsList: initFavItemsList()
};

export const WeatherReducer = (state = initState, action) => {
  switch (action.type) {
    case WeatherConstants.FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true
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
        loading: false
      };

    case WeatherConstants.TAG_FAVORITE:
      saveState(
        [...state.favItemsList, action.payload.city],
        lsConst.WTHRLY_FAV_KEYS
      );
      return {
        ...state,
        isFavorite: !state.isFavorite,
        favItemsList: [...state.favItemsList, action.payload.city]
      };

    case WeatherConstants.UNTAG_FAVORITE:
      const data = state.favItemsList.filter(function(item) {
        return !item.includes(action.payload.city);
      });
      saveState(data, lsConst.WTHRLY_FAV_KEYS);
      return {
        ...state,
        isFavorite: !state.isFavorite,
        favItemsList: data
      };

    default:
      return state;
  }
};
