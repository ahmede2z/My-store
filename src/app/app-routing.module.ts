import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseSuccessComponent } from './purchase-success/purchase-success.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'productInfo/:id',component:ProductInfoComponent},
  {path:'success',component:PurchaseSuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
