import {Component, OnInit} from '@angular/core';
import {VeloresService} from "../../service/velores.service";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  velist = velist[];

  constructor(private VeloresService: VeloresService) { }

  ngOnInit(): void {
    this.velist = this.VeloresService.getVelosList();
  }


}
