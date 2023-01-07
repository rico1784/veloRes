import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiGetService} from "../../../service/api-get.service";
import ApiUser from "../../../../interfaces/apiUser";
import {VeloresService} from "../../../service/velores.service";



@Component({
  selector: 'app-velo-list',
  templateUrl: './velo-list.component.html',
  styleUrls: ['./velo-list.component.scss']
})
export class VeloListComponent implements OnInit{
  stationList: Observable<ApiUser[]> | null = null;
  stations!: any[];
  private lat!:number
  private lng!:number

  @Input() public monTableau: any[] = [];

  constructor(private apiGet: ApiGetService,private VeloresService: VeloresService) {}


  ngOnInit(): void {
    this.stationList = this.apiGet.getStationList();
    console.log(this.stationList);

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


}

