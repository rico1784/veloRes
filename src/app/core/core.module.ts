import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClient, HttpClientModule} from "@angular/common/http";







@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatGridListModule,
    HttpClientModule


  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class CoreModule { }
