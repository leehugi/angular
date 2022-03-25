import { Action } from "@ngrx/store";
import {
  DataToServer,
  DataFromServer,
  GeneralResponse,
} from "../models/app-data";

export enum AppActionTypes {
  PostData = "[app] Post data to server",
  PostDataSuccess = "[app] Post data to server success ",
  PostDataFailure = "[app] Post data to server failure",
}

export class PostData implements Action {
  readonly type = AppActionTypes.PostData;

  constructor(public payload: any) {}
}

export class PostDataSuccess implements Action {
  readonly type = AppActionTypes.PostDataSuccess;

  constructor(public payload: any) {}
}

export class PostDataFailure implements Action {
  readonly type = AppActionTypes.PostDataFailure;

  constructor(public payload: GeneralResponse) {}
}

export type AppActions = PostData | PostDataSuccess | PostDataFailure;
