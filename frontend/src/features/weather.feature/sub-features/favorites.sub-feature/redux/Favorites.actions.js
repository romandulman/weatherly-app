import { FavoritesConstants } from "./Favorites.constants";

export const AddFavotiteAction = weatherItem => {
  return dispatch => {
    dispatch(AddToFavorites(weatherItem));
  };
};

export const RemoveFavoriteAction = city => {
  return dispatch => {
    dispatch(RemoveFavorite(city));
  };
};

export const LoadFavoritesAction = () => {
  return dispatch => {
    dispatch(LoadFavorites());
  };
};

///////////////////////////////////////////////////////

const AddToFavorites = weatherItem => ({
  type: FavoritesConstants.ADD_FAVORITE,
  payload: { weatherItem }
});

const RemoveFavorite = city => ({
  type: FavoritesConstants.REMOVE_FAVORITE,
  payload: { city }
});

const LoadFavorites = () => ({
  type: FavoritesConstants.LOAD_FAVORITES
});
