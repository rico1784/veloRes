import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../../service/marker.service';
import {VeloresService} from  '../../../service/velores.service';
import { Observable } from 'rxjs';
import ApiUser from "../../../../interfaces/apiUser";
import {ApiGetService} from "../../../service/api-get.service";



@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})


export class LeafletMapComponent implements AfterViewInit{

  private map : L.Map | undefined;
  private stationList!: [];
  constructor(private markerService: MarkerService, private veloresService: VeloresService) {

  }


  ngAfterViewInit(): void {

    // this.veloresService.getStationList().subscribe(data => {
    //   // data is the array of ApiUser objects
    //   for (const element of data){
    //     let x = element.position.lat
    //     let y = element.position.lng
    //     console.log(x,y)
    //   }
    let x: number = 45.743317;
    let y: number = 4.815747;
    let z: number = 15;


    this.map = L.map('map',
      {
        center: [x, y],
        zoom: z
      })

    this.markerService.placeMarker(this.map, x, y, "item.name");


    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

      }).addTo(this.map);


  };






}
