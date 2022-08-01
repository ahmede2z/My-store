import { Component, OnInit } from '@angular/core';
import { product } from '../Models/Product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: string = "Products List"
  products: product[] = [];
  // dependency injection 
  constructor(private productsService: ProductsService,private router:Router) { }

  ngOnInit(): void {
    // get all products from productsService
    this.productsService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        //  add count to each element 
        product["count"] = 1;
      }
      this.products = res;
    });

  }

  onSelect(product:product):void{
    this.router.navigate(['/productInfo',product.id]);
  }

}
