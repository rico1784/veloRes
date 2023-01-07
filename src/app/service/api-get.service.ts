import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ApiUser from "../../interfaces/apiUser";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})



export class ApiGetService {
  stationList!: Observable<ApiUser[]>;
  list: any[] = [];
  constructor(private http: HttpClient) { }

  getStationList(): Observable<ApiUser[]>  {
    this.stationList = this.http.get<ApiUser[]>(`http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433`);
    return this.stationList;
    }

  getMonTableau(): any {
    this.stationList.subscribe(data => {
      // data is the array of ApiUser objects
      const monTableau = [];
      let id;
      for (const element of data) {
        let x = element.position.lat
        let y = element.position.lng
        monTableau.push(id = 'L.marker([' + x + ', ' + y + ']).bindPopup(\'This is Littleton, CO. \')');

      }
      return monTableau;

    });



  }
  addToList(item: any) {
    this.list.push(item);
  }




}
