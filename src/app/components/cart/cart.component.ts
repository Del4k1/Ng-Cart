import { Component } from '@angular/core';
import { IOrderProduct } from 'src/app/interface/IProduct';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products: IOrderProduct[] = [];
  count: number;

  constructor(private cartService: CartService) {
    this.loadCartData();
  }

  loadCartData() {
    this.products = this.cartService.productCart;
    this.count = this.cartService.getTotalPrice();
  }

  removeToCart(id: number) {
    this.cartService.removeCart(id);
    this.loadCartData();
  }
}
