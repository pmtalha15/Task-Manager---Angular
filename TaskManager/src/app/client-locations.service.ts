import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from './client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  urlPrefix: string = "http://localhost:9090";
  constructor(private httpclient: HttpClient) { }

  getClientLocations():Observable<ClientLocation[]>{
    return this.httpclient.get<ClientLocation[]>(this.urlPrefix + "/api/clientLocations",{responseType:"json"})
  }
}
