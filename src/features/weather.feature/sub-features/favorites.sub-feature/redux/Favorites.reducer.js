import { FavoritesConstants } from "./Favorites.constants";
import { saveState , loadState, isSavedPersist} from "../../../../../utils/local-storage";

const initState = {
  favItems: []
};

const initialState = () => {
    if (isSavedPersist()) {
        saveState(initState);
        return initState;
    } else {

        return loadState();
    }
};

export const FavoritesReducer = (state = initialState(), action) => {

  switch (action.type) {

    case FavoritesConstants.ADD_FAVORITE:
        saveState({ favItems: [...state.favItems, action.payload.weatherItem] })
      return { favItems: [...state.favItems, action.payload.weatherItem] };

    case FavoritesConstants.REMOVE_FAVORITE:
      const data = state.favItems.filter(function(item) {
        return !item.city.includes(action.payload.city);
      });
      saveState(data);
      return {
        favItems: data
      };

    case FavoritesConstants.LOAD_FAVORITES:
        console.log([...state.favItems])
      return {
        ...state,
       favItems: [...state.favItems]
      };
    default:
      return state;
  }
};
