import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/IProduct';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: IProduct[] = [];
  isLoading: boolean = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.isLoading = false;
    });
  }

  addToCart(product: IProduct) {
    this.cartService.addCart(product);
  }
}
