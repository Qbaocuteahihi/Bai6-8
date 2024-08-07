import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { TotalCostComponent } from '../total/total.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TotalCostComponent],
  templateUrl: 'product-card.component.html',
  styleUrl: 'product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {}
}
