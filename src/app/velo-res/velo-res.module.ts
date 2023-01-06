import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeloResRoutingModule } from './velo-res-routing.module';
import { VeloListComponent } from './components/velo-list/velo-list.component';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';



@NgModule({
  declarations: [
    VeloListComponent,
    LeafletMapComponent,
  ],
  imports: [
    CommonModule,
    VeloResRoutingModule
  ],


})
export class VeloResModule { }
