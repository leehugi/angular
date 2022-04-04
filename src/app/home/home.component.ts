import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { MatTabChangeEvent } from "@angular/material";
import { select, Store } from "@ngrx/store";
import { skip } from "rxjs/operators";

import { getDisplayData, State } from "./reducers";
import { INSTRUCTIONS_MSGS, InfoMessages } from "./models/info-messages";
import { RestService } from './services/rest.service';
import { DataToServer, DataFromServer } from './models/app-data';
import { SendMessageComponent } from "./send-message/send-message.component";
import { PostData } from "./actions/app.actions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  infoMessages: InfoMessages = INSTRUCTIONS_MSGS[0];
  dataFromServer: DataFromServer;

  @ViewChild("sendMessage", { read: ViewContainerRef, static: true }) container;
  componentRef: ComponentRef<any>;

  constructor(private store: Store<State>, private rest: RestService, private resolve: ComponentFactoryResolver) {}

  public ngOnInit(): void {}

  onTabSelection(event: MatTabChangeEvent) {
    this.infoMessages = INSTRUCTIONS_MSGS[event.index];
    this.dataFromServer =  null;
    this.container.clear();
  }


  onSendBtnClick(event: DataToServer): Promise<void | DataFromServer> {
    return this.rest.sendValueToServer(event).then(res => {
        this.dataFromServer = res;
      }
    ).catch(error => console.log(error.message));
  }

  onSendBtnClickRedux(event: DataToServer): void {
    event = Object.assign({}, event);   // clone the event
    this.store.dispatch(new PostData(event));
    const obs = this.store.pipe(skip(1));  // skip the default value
    const sub = obs.pipe(select(getDisplayData)).subscribe(res => {
      this.dataFromServer = res;
      sub.unsubscribe();
    });
  }

  createComponent() {
    this.container.clear();
    // create a dynamic component
    const factory: ComponentFactory<SendMessageComponent> = this.resolve.resolveComponentFactory(SendMessageComponent);
    this.componentRef = this.container.createComponent(factory, this.container.parentInjector);
    this.componentRef.instance.dataToServerEvent.subscribe(async event => {
    // using Promise to wait for the http response
      await new Promise(resolve => {    
        resolve(this.onSendBtnClick(event));
      });
      this.componentRef.instance.valueReceive = this.dataFromServer;
    });
  }

  ngOnDestroy() {
    this.container.clear();
    this.componentRef.destroy();
  }
}
