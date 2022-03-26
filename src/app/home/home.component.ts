import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "./reducers";
import { INSTRUCTIONS_MSGS, InfoMessages } from "./models/info-messages";
import { MatTabChangeEvent } from "@angular/material";
import { RestService } from './services/rest.service';
import { DataToServer, DataFromServer } from './models/app-data';
import { SendMessageComponent } from "./send-message/send-message.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  infoMessages: InfoMessages = INSTRUCTIONS_MSGS[0];
  dataFrom: DataFromServer;

  @ViewChild("sendMessage", { read: ViewContainerRef, static: true }) container;
  componentRef: ComponentRef<any>;

  constructor(private store: Store<State>, private rest: RestService, private resolve: ComponentFactoryResolver) {}

  public ngOnInit(): void {}

  onTabSelection(event: MatTabChangeEvent) {
    this.infoMessages = INSTRUCTIONS_MSGS[event.index];
  }


  onSendBtnClick(event: DataToServer): Promise<void | DataFromServer> {
    return this.rest.sendValueToServer(event).then(res => {
        console.log(res);
        this.dataFrom = res;
      }
    );
  }

  onSendBtnClickRedux(): void {}

  createComponent() {
    this.container.clear();
    const factory: ComponentFactory<SendMessageComponent> = this.resolve.resolveComponentFactory(SendMessageComponent);
    this.componentRef = this.container.createComponent(factory, this.container.parentInjector);
    this.componentRef.instance.dataToServerEvent.subscribe(async event => {
      // using Promise to wait for the http response
      await new Promise(resolve => {    
        resolve(this.onSendBtnClick(event));
      });
      this.componentRef.instance.valueReceive = this.dataFrom;
    });
  }

  ngOnDestroy() {
    this.container.clear();
    this.componentRef.destroy();
  }
}
