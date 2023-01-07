import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import ApiUser from "../../interfaces/apiUser";


@Injectable({
  providedIn: 'root'
})
export class VeloresService {
  private baseUrl = 'http://api.jcdecaux.com/vls/v1/stations';
  private apiKey = '349af4632e93437ca292b20cd7d606c7e30fa433';
  stations!: any[];
  private lat!:number
  private lng!:number
  private monTableau!: any[];


  constructor(private http: HttpClient) { }

  getStations(): Observable<ApiUser[]> {
    return this.http.get<ApiUser[]>(`${this.baseUrl}?contract=Lyon&apiKey=${this.apiKey}`);
  }

  getlist(){
    this.getStations().subscribe(stations => {
    const monTableau: any[] = [];
      this.stations = stations;
      this.stations.forEach(station => {
        console.log(station);
        this.lat = station.position.lat
        this.lng = station.position.lng
        monTableau.push('L.marker(['+this.lat+', '+this.lng+']).bindPopup(\'This is Littleton, CO.\')');
        console.log(monTableau)
      })
      console.log(monTableau);
    });
    return this.monTableau;
  }


}


