import {FavoritesConstants} from './Favorites.constants';


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
const AddToFavorites = key => ({
    type: FavoritesConstants.ADD_FAVORITE, key
});

const RemoveFavorite = city => ({
    type: FavoritesConstants.REMOVE_FAVORITE, city
});

const LoadFavorites = () => ({
    type: FavoritesConstants.LOAD_FAVORITES
});

