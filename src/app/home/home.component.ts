import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "./reducers";
import { INSTRUCTIONS_MSGS, InfoMessages } from "./models/info-messages";
import { MatTabChangeEvent } from "@angular/material";
import { RestService } from './services/rest.service';
import { DataToServer, DataFromServer } from './models/app-data';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  infoMessages: InfoMessages = INSTRUCTIONS_MSGS[0];
  dataTo: DataToServer = {value: 0};
  dataFrom: DataFromServer;

  constructor(private store: Store<State>, private rest: RestService) {}

  public ngOnInit(): void {}

  onTabSelection(event: MatTabChangeEvent) {
    this.infoMessages = INSTRUCTIONS_MSGS[event.index];
  }


  onSendBtnClick(event: DataToServer): void {
    this.rest.sendValueToServer(event).subscribe(
      res => {
        console.log(res);
        this.dataFrom = res;
      }
    );
  }

  onSendBtnClickRedux(): void {}

  createComponent() {}

  ngOnDestroy() {}
}
