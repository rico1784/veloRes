import { Injectable } from '@angular/core';
import * as L from 'leaflet';



//Definition des options :
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({iconRetinaUrl,iconUrl,shadowUrl});
L.Marker.prototype.options.icon = iconDefault;

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  placeMarker(map:L.Map, x: number, y: number, name: string){
    const marker = L.marker([x,y]);

    const popupContent : string = "<div class='popupContent'>" + name +
      "(" + x + "," + y + ")" + "</div>" ;
      marker.bindPopup(popupContent);
      marker.addTo(map);
  }

}
