import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: ProductModel;

  constructor(
    private router: Router,
    private storeService: StoreService,
  ) {}

  addToCart(product: ProductModel) {
    this.storeService.addToCart(product);
    this.router.navigate(['/total']);
  }
}
