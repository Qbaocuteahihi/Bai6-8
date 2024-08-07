import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { StoreService } from '../../services/store.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss',
})
export class ListProductComponent {
  constructor(
    public storeService: StoreService,
    public authSercice: AuthService,
    private router: Router,
  ) {}

  trackByProductId(index: number, product: any): number {
    return product.id;
  }

  addToCart() {
    this.router.navigate(['/total']);
  }
}
