import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ApiUser from "../../interfaces/apiUser";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class VeloresService {
  stationList!: Observable<ApiUser[]>;
  public monTableau: any[] = [];
  constructor(private http: HttpClient) { }

  getStationList(): Observable<ApiUser[]> {
    this.stationList = this.http.get<ApiUser[]>(`http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433`);
    return this.stationList;
  }

  getMonTableau():any {
    this.getStationList().subscribe(data => {
      // data is the array of ApiUser objects
      const Tableau = [];
      for (const element of data) {
        let x = element.position.lat
        let y = element.position.lng
        Tableau.push('L.marker(['+x+', '+y+']).bindPopup(\'This is Littleton, CO. \')');

      }
      this.monTableau = Tableau;
    });
  }

}
