import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [ 
  {path: 'products', component: ProductsComponent},
  {path: '', component: HomepageComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
