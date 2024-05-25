import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { CatDashboardComponent } from './components/cat-dashboard/cat-dashboard.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cats',
    component: CatDashboardComponent
  },
  {
    path: 'cats/:id',
    component: CatDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
