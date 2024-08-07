import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss',
})
export class TotalComponent {
  @Input() product!: ProductModel;

  constructor(public authService: AuthService) {}
}
