import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ApiUser from "../../interfaces/apiUser";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class VeloresService {
  stationList!: Observable<ApiUser[]>;
  constructor(private http: HttpClient) { }

  getStationList(): Observable<ApiUser[]> {
    this.stationList = this.http.get<ApiUser[]>(`http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433`);
    return this.stationList;
  }

}



