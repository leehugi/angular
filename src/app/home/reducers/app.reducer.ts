import { AppActions } from "../actions/app.actions";
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
    default: {
      return state;
    }
  }
}
