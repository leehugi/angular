import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataFromServer } from '../models/app-data';

@Component({
  selector: 'app-shay',
  templateUrl: './shay.component.html',
  styleUrls: ['./shay.component.scss']
})
export class ShayComponent implements OnInit {

@Input()inputData: DataFromServer;

@Output() outputObj = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.outputObj.emit("bla");
  }

}
