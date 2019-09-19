import {FavoritesConstants} from './Favorites.constants'
import {WeatherConstants} from "../../../redux/Weather.constants";
const initState = {
   // items: [],
  //  loading: false,
  //  error: null,
   // isFavorite: false,
    favItems:[]
};

export const FavoritesReducer = (state=initState, action) => {
    switch (action.type) {
        case WeatherConstants.ADD_FAVORITE:

            return{
          favItems:  [...state.favItems, action.key ]
    }
    //   return {
                //  ...state,
                //  items: { current: state.items.current, forcast: state.items.forcast},
                //  isFavorite: true,
             //   ...state,
            //    favItems:[...action.key]

           // }
          //




                // [...state.favItems, state.items]
          //  };
        case WeatherConstants.REMOVE_FAVORITE:
            //console.log(state.favItems)

            var found = state.favItems.find(function(element) {
                return element.city === "Tel-Aviv";
            });

         const data = state.favItems.filter(function (item) {
                return !item.city.includes(action.city);
            });
            console.log(data);


           return {
              favItems: data

           } //=> favItems.city !== action.key);// {
              //  ...state,
              //  items: { current: state.items.current, forcast: state.items.forcast},
            //    isFavorite: false,
              //  favItems: [
                 //   ...state.favItems.slice(0, 1),
                    // ...state.favItems.slice(state.favItems + 1)
             //   ],
          //  };

        case WeatherConstants.LOAD_FAVORITES:
          //  console.log(action.d);

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
