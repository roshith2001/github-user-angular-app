import { createReducer, on } from "@ngrx/store";
import { addToFavourite, removeFromFavourite } from "./favourite.action";

export const initialState:any = {
    favourite: []
};

export const favouriteReducer = createReducer(
    initialState,
    on(addToFavourite, (state, {favourite}) => {
        
        return {
            ...state,
            favourite: [...state.favourite, favourite]
        }
    }),
    on(removeFromFavourite, (state, {favourite}) => ({
        ...state,
        favourite: state.favourite.filter((fav:any) => fav.login != favourite.login)
    })
        
    ))
