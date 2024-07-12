import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TshoesAboutComponent } from './tshoes-about/tshoes-about.component';
import { TshoesShoesComponent } from './tshoes-shoes/tshoes-shoes.component';

const routes: Routes = [
  {
    path : '',
    component: TshoesShoesComponent
  },
  {
    path: 'shoes',
    component:TshoesShoesComponent
  },
  {
    path : 'about',
    component : TshoesAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
