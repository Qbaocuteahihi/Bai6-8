import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: any;

  constructor(public auth: Auth) {}

  async login() {
    const creadential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.currentUser = creadential.user;
    console.log(creadential);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }

  addToCart(product: any) {
    let findIndex = this.cart.findIndex((element) => {
      return element.id === product.id;
    });

    if (findIndex !== -1) {
      if (product.inStock <= 0) {
        return;
      } else {
        this.cart[findIndex].quantity += 1;
        product.inStock--;
      }
    } else {
      if (product.inStock > 0) {
        this.cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
        product.inStock--;
      }
    }
  }

  removeFromCart(index: number) {
    const product = this.cart[index];
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );
  }

  cart: any[] = [];
}
