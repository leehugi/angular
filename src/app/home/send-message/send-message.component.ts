import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataFromServer, DataToServer } from '../models/app-data';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  @Output() dataToServerEvent = new EventEmitter();
  @Input() valueReceive: DataFromServer;
  dataToServer: DataToServer = {value: 0};

  constructor() { }

  ngOnInit() {
  }

  onSendMsgToServer(){
    this.dataToServerEvent.emit(this.dataToServer);
    // this.isReceive = true;
  }

}
