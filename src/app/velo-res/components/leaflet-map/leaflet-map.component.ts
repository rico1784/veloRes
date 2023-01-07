import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../../service/marker.service';
import {ApiGetService} from "../../../service/api-get.service";




@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})


export class LeafletMapComponent implements AfterViewInit{
  private map : L.Map | undefined;


  constructor(private markerService: MarkerService, private ApiService: ApiGetService) {
  }

  ngAfterViewInit(): void {
    let x: number = 45.743317;
    let y: number = 4.815747;
    let z: number = 15;

    this.map = L.map('map',
      {
        center: [x, y],
        layers: [],
        zoom: z,

      })

    this.markerService.placeMarker(this.map, x, y, "item.name");
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

      }).addTo(this.map);


  }
}


