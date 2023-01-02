import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Station} from "../velo-res/models/velo-station.models";

@Injectable({
  providedIn: 'root'
})
export class VeloresService {

  constructor(private http: HttpClient) {
  }

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>('http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433');
  }
}
