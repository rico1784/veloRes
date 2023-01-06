import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VeloResModule} from "./velo-res/velo-res.module";

const routes: Routes = [

  {path: 'velo-res', loadChildren:() => import('./velo-res/velo-res-routing.module').then(m => m.VeloResRoutingModule)},
  {path: '**', redirectTo:'velo-res'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
