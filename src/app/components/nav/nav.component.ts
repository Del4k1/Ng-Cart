import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  count: number = 0;

  constructor(private cartService: CartService) {
    this.subscribeToCountMessage();
  }

  subscribeToCountMessage() {
    this.cartService.countMessage.subscribe((res) => {
      this.count = res;
    });
  }
}
