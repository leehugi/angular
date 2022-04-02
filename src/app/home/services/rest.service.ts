import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataToServer, DataFromServer } from '../models/app-data';

@Injectable()
export class RestService {
  url = "http://127.0.0.1:3000/client/status";

  constructor(private http: HttpClient) {}

  sendValueToServer(value: DataToServer): Promise<DataFromServer> {
    return this.http.post<DataFromServer>(this.url, value).toPromise();
  }
}
