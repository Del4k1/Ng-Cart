import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOrderProduct, IProduct } from 'src/app/interface/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productCart: IOrderProduct[] = [];
  countMessage = new Subject<number>();

  constructor() {}

  addCart(item: IProduct) {
    this.pushCart(item);

    this.sendCountMessage();
  }

  pushCart(item: IProduct) {
    const existingItem = this.findCartItem(item.id);

    if (!existingItem) {
      this.addCartItem(item);
    } else {
      existingItem.count++;
    }
  }

  removeCart(id: number) {
    this.popCart(id);
    this.sendCountMessage();
  }

  popCart(id: number) {
    const existingItem = this.findCartItem(id);

    if (existingItem && existingItem.count > 1) {
      existingItem.count--;
    } else {
      this.removeCartItem(id);
    }
  }

  getTotalPrice() {
    return this.productCart.reduce((count, product) => {
      return count + product.product.price * product.count;
    }, 0);
  }

  private findCartItem(id: number): IOrderProduct | undefined {
    return this.productCart.find((item) => item.product.id === id);
  }

  private addCartItem(item: IProduct) {
    this.productCart.push({
      product: item,
      count: 1,
    });
  }

  private removeCartItem(id: number) {
    this.productCart = this.productCart.filter(
      (item) => item.product.id !== id
    );
  }

  private sendCountMessage() {
    this.countMessage.next(
      this.productCart.reduce((total, item) => total + item.count, 0)
    );
  }
}
