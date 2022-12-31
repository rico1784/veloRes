import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {VeloListComponent} from "./components/velo-list/velo-list.component";


const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'velo', component: VeloListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

  ],
  exports: [RouterModule]
})
export class VeloResRoutingModule { }
