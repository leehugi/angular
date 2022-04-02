import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { State } from "../reducers";
import { switchMap } from 'rxjs/operators';

import { RestService } from '../services/rest.service'
import { AppActionTypes, PostData, PostDataFailure, PostDataSuccess } from "../actions/app.actions";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public store: Store<State>, private rest: RestService) {}

  @Effect()
  sendData = this.actions$.pipe(
    ofType(AppActionTypes.PostData),
    switchMap( (data: PostData) => {
        return this.rest.sendValueToServer(data.payload).
          then( resData => {
            return new PostDataSuccess(resData);
          })
          .catch((errorRes) => {
            return new PostDataFailure(errorRes);
          })
    })
  );
}
