import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataToServer, DataFromServer } from '../models/app-data';

@Injectable()
export class RestService {
  url = "http://127.0.0.1:3000/client/status";

  constructor(private http: HttpClient) {}

  getDataFromApi(data: DataToServer): Observable<DataFromServer> {
    return this.http.post<DataFromServer>(`${this.url}`,data);
  }
}