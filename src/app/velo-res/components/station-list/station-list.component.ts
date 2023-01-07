import { Component, OnInit, Input } from '@angular/core';
import {VeloresService} from "../../../service/velores.service";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  stations!: any[];
  private lat!:number
  private lng!:number

 @Input() public monTableau: any[] = [];

  constructor(private VeloresService: VeloresService) {

  }

  ngOnInit() {
    this.VeloresService.getStations().subscribe(stations => {
      this.stations = stations;
      this.stations.forEach(station => {
        console.log(station);
        this.lat = station.position.lat
        this.lng = station.position.lng
        this.monTableau.push('L.marker(['+this.lat+', '+this.lng+']).bindPopup(\'This is Littleton, CO.\')');
        console.log(this.monTableau)
      })
    });
  }

  getlist(){

  }
}
