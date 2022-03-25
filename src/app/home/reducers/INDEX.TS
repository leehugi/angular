// ---------------------Store state---------------------

import { AppState, appReducer } from "./app.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";

export interface State {
  display: AppState;
}

// ---------------------Reducers---------------------

export const reducers: ActionReducerMap<State> = {
  display: appReducer,
};

// ---------------------Feature Selectors---------------------

export const displayFeature = createFeatureSelector<AppState>("display");

export const getDisplayData = createSelector(
  displayFeature,
  (state) => state.data
);
