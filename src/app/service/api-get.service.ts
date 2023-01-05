import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ApiUser from "../../interfaces/apiUser";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiGetService {
  private stations: Observable<ApiUser[]> | null = null;
  constructor(private http: HttpClient) { }


  getStationList(): Observable<ApiUser[]>  {
  if(!this.stations){
    console.log('chargement')
    this.stations = this.http.get<ApiUser[]>(
      `http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433`);
    }
    return this.stations;
  console.log(this.stations)
  }

}
