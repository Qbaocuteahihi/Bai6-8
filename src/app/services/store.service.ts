import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(public authService: AuthService) {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Chui Sạc Siêu Xịn',
      price: 55000,
      inStock: 20,
      description: 'Dây dài tận 2m',
      imageUrl: 'assets/chuisac1.jpg',
    },
    {
      id: 2,
      name: 'Siêu Xe Mô Hình',
      price: 7000,
      inStock: 120,
      description: 'Đổi Màu Cực Xịn',
      imageUrl: 'assets/loalam.jpg',
    },
    {
      id: 3,
      name: 'Tai Nghe Chụp Tai Siêu Xịn',
      price: 120000,
      inStock: 30,
      description: 'Màu Sắc Đa Dạng',
      imageUrl: 'assets/tainghe1.jpg',
    },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
        console.log(this.cart);
      } else {
        this.cart.push({ ...product, quantity: 1 });
        productInStock!.inStock--;
        console.log(this.cart);
      }
    } else {
      alert('Vui lòng đăng nhập để mua hàng');
    }
  }
}
