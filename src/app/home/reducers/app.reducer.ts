import { AppActions, AppActionTypes, PostDataSuccess } from "../actions/app.actions";
import { DataFromServer } from "../models/app-data";

export interface AppState {
  data: DataFromServer;
}

const initialState: AppState = {
  data: {
    value: 0,
    result: "",
  },
};

export function appReducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.PostDataSuccess:
      return {
        ...state,
        data: action.payload
      }
    case AppActionTypes.PostDataFailure:
      return {
        ...state,
        data: this.initialState
      }
    default: {
      return state;
    }
  }
}
