import { Component, OnInit } from '@angular/core';
import { product } from '../Models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  productId: any;
  product: product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {

    this.product = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      description: "",
      count: 1
    }

  }

  ngOnInit(): void {
    // get product id from URL
    this.productId = this.route.snapshot.paramMap.get("id");
    // get product by id
    this.productsService.getProduct(this.productId).subscribe(res => {
      this.product = res;
      this.product.count = 1;
    });

  }
  // add product to cart
  addToCart(product: product): void {
    this.productsService.addProduct(product);
  }




}
