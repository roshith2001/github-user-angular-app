import { createAction, props } from "@ngrx/store";


export const addToFavourite = createAction('[Favourite] Add to Favourite', props<{favourite: any}>());

export const removeFromFavourite = createAction('[Favourite] Remove from Favourite', props<{favourite: any}>());
