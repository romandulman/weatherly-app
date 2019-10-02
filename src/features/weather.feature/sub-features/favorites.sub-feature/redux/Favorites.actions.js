import { FavoritesConstants } from "./Favorites.constants";


export const AddFavotiteAction = weatherItem => ({
  type: FavoritesConstants.ADD_FAVORITE,
  payload: { weatherItem }
});

export const RemoveFavoriteAction = city => ({
  type: FavoritesConstants.REMOVE_FAVORITE,
  payload: { city }
});

export const LoadFavoritesAction = () => ({
  type: FavoritesConstants.LOAD_FAVORITES
});
