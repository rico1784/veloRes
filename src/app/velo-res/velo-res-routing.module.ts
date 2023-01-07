import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VeloListComponent} from "./components/velo-list/velo-list.component";
import {LeafletMapComponent} from "./components/leaflet-map/leaflet-map.component";
import {StationListComponent} from "./components/station-list/station-list.component";



const routes: Routes = [
  { path: '', component: VeloListComponent},
  { path: 'map', component:LeafletMapComponent },
  { path: 'list', component:StationListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

  ],
  exports: [RouterModule]
})
export class VeloResRoutingModule { }
