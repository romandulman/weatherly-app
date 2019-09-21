import { FavoritesConstants } from "./Favorites.constants";

const initState = {
  favItems: []
};
export const FavoritesReducer = (state = initState, action) => {
  switch (action.type) {
      case FavoritesConstants.ADD_FAVORITE:
      return { favItems: [...state.favItems, action.payload.weatherItem] };

    case FavoritesConstants.REMOVE_FAVORITE:
      const data = state.favItems.filter(function(item) {
        return !item.city.includes(action.payload.city);
      });
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
