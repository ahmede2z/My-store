import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseSuccessComponent } from './purchase-success/purchase-success.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    NavBarComponent,
    ProductInfoComponent,
    CartComponent,
    PurchaseSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
