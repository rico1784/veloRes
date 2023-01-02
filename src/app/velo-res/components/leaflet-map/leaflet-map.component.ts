import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../../service/marker.service';
import ApiUser from "../../../../interfaces/apiUser";



@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit{


  constructor(private markerService: MarkerService) {
  }

  private map : L.Map | undefined;

  ngAfterViewInit(): void {

    let x : number = 46.865;
    let y : number = 7.125;
    let z : number = 15;

    this.map = L.map('map',
      {
        center: [x, y],
        zoom: z
      })


    this.markerService.placeMarker(this.map,x,y,"chateau");


  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

    }).addTo(this.map);



  }




}

