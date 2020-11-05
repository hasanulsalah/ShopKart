import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: 'home', component: HeaderComponent},
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'product', component: ProductDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
