import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VeloListComponent} from "../components/velo-list/velo-list.component";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class VeloresService {
  private velos: Observable<VeloListComponent[]> | null = null;

  constructor(private http: HttpClient) {}

  getVelosList(){
    if (!this.velos) {
      console.log('chargement de la liste');
      this.velos = this.http.get<VeloListComponent[]>('http://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=349af4632e93437ca292b20cd7d606c7e30fa433')
    }
    return this.velos
  }
}
