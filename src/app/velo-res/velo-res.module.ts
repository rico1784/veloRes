import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeloResRoutingModule } from './velo-res-routing.module';
import { VeloListComponent } from './components/velo-list/velo-list.component';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { StationListComponent } from './components/station-list/station-list.component';




@NgModule({
  declarations: [
    VeloListComponent,
    LeafletMapComponent,
    StationListComponent,

  ],
  imports: [
    CommonModule,
    VeloResRoutingModule
  ],


})
export class VeloResModule { }
