import { Component } from '@angular/core';

@Component({
  selector: 'app-velo-list',
  templateUrl: './velo-list.component.html',
  styleUrls: ['./velo-list.component.scss']
})
export class VeloListComponent {
  number!: number;
  contract_name!: string;
  name!: string;
  address!: string;
  banking!: boolean;
  bonus!: boolean;
  bike_stands!: number;
  available_bike_stands!: number;
  available_bikes!: number;
  status!: string;
  last_update!: number;


  ngOnInit() {
    this.contract_name = "test name"
    this.name = "2010 - CONFLUENCE / DARSE"
    this.address = "ANGLE ALLEE ANDRE MURE ET QUAI ANTOINE RIBOUD"

  }
}
