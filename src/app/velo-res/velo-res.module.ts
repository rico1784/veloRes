import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeloResRoutingModule } from './velo-res-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { VeloListComponent } from './components/velo-list/velo-list.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    VeloListComponent,
  ],
  imports: [
    CommonModule,
    VeloResRoutingModule
  ]
})
export class VeloResModule { }
