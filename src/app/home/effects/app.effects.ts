import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { State } from "../reducers";

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, public store: Store<State>) {}
}
