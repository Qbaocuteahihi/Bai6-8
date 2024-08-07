import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { elementAt } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private authService: AuthService) {}

  products: Product[] = [
    {
      id: 1,
      name: 'Chui Sạc Siêu Xịn',
      price: 55000,
      inStock: 20,
      initialStock: 50,
      description: 'Dây dài tận 2m',
      imageUrl: 'assets/chuisac1.jpg',
    },
    {
      id: 2,
      name: 'Siêu Xe Mô Hình',
      price: 7000,
      inStock: 50,
      initialStock: 50,
      description: 'Đổi Màu Cực Xịn',
      imageUrl: 'assets/loalam.jpg',
    },
    {
      id: 3,
      name: 'Tai Nghe Chụp Tai Siêu Xịn',
      price: 120000,
      inStock: 30,
      initialStock: 30,
      description: 'Màu Sắc Đa Dạng',
      imageUrl: 'assets/tainghe1.jpg',
    },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      // let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
        this.total += product.price; // Cập nhật tổng tiền
      } else {
        this.cart.push({ ...product, quantity: 1 });
        productInStock!.inStock--;
        this.total += product.price; // Cập nhật tổng tiền
      }
      this.totalcost(); // Gọi phương thức tính tổng tiền
    } else {
      alert('Hãy đăng nhập để thêm sản phẩm vào giỏ hàng');
    }
  }

  deletecart(product: any) {
    if (this.authService.currentUser) {
      // Kiểm tra xem người dùng đã đăng nhập hay chưa
      this.cart = []; // Đặt lại giỏ hàng về rỗng
      this.total = 0; // Đặt lại tổng tiền về 0
      // this.products
      // this.products.forEach((product) => {
      //   product.inStock = product.initialStock; // Cập nhật lại số lượng sản phẩm trong kho
      // });
      this.totalcost(); // Gọi phương thức tính tổng tiền
      alert('Giỏ hàng đã được xóa thành công!'); // Hiển thị thông báo cho người dùng
    } else {
      alert('Hãy đăng nhập để xóa sản phẩm khỏi giỏ hàng');
    }
  }

  total: number = 0;

  totalcost() {
    this.total = this.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return this.total;
  }

  checkout() {
    if (this.cart.length === 0) {
      alert(
        'Giỏ hàng của bạn đang trống. Vui lòng thêm một số sản phẩm vào giỏ hàng trước khi thanh toán',
      );
      return;
    }

    const confirmed = confirm(
      `Tổng số tiền của bạn là ${this.total} VND. Bạn có muốn tiến hành thanh toán không?`,
    );

    if (confirmed) {
      this.cart = [];
      this.total = 0; // Đặt tổng tiền về 0 sau khi thanh toán
      alert('Cám ơn đã mua hàng!');
    }
  }
}
