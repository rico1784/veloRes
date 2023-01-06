import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {ApiGetService} from "../../../service/api-get.service";
import ApiUser from "../../../../interfaces/apiUser";


@Component({
  selector: 'app-velo-list',
  templateUrl: './velo-list.component.html',
  styleUrls: ['./velo-list.component.scss']
})
export class VeloListComponent implements OnInit{
  stationList: Observable<ApiUser[]> | null = null;

  constructor(private apiGet: ApiGetService) {}


  ngOnInit(): void {
    this.stationList = this.apiGet.getStationList();
    console.log(this.stationList);


    }


}

