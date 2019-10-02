import { FavoritesConstants } from "./Favorites.constants";
import {
  saveState,
  loadState,
  isSavedPersist,
  lsConst
} from "../../../../../utils/local-storage";

const initState = {
  favItems: []
};

const initialState = () => {
  if (isSavedPersist(lsConst.WTHRLY_FAV_LIST)) {
    saveState(initState, lsConst.WTHRLY_FAV_LIST);
    return initState;
  } else {
    return loadState(lsConst.WTHRLY_FAV_LIST);
  }
};

export const FavoritesReducer = (state = initialState(), action) => {
  switch (action.type) {
    case FavoritesConstants.ADD_FAVORITE:
      saveState(
        { favItems: [...state.favItems, action.payload.weatherItem] },
        lsConst.WTHRLY_FAV_LIST
      );
      return {
        favItems: [...state.favItems, action.payload.weatherItem]
      };

    case FavoritesConstants.REMOVE_FAVORITE:
      const data = state.favItems.filter(function(item) {
        return !item.city.includes(action.payload.city);
      });
      saveState({ favItems: data }, lsConst.WTHRLY_FAV_LIST);
      return {
        favItems: data
      };

    case FavoritesConstants.LOAD_FAVORITES:
      return {
        ...state,
        favItems: [...state.favItems]
      };

    default:
      return state;
  }
};
