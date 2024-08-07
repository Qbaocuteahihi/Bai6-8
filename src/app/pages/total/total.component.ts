import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StoreService } from '../../services/store.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent {
  cart: any[] = [];
  @Input() product!: ProductModel;
  total: number = 0;

  constructor(
    public authService: AuthService,
    public storeService: StoreService,
  ) {}

  protected readonly StoreService = StoreService;
}
