import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TotalCostComponent } from '../../components/total/total.component';
import { CheckOutComponent } from '../../components/check-out/check-out.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductCardComponent, TotalCostComponent, CheckOutComponent],
  templateUrl: 'list-product.component.html',
  styleUrl: 'list-product.component.scss',
})
export class ListProductComponent {
  constructor(public storeService: StoreService) {}
}
