import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss',
})
export class DetailProductComponent {
  detailProduct!: ProductModel | undefined;

  constructor(
    public activatedRoute: ActivatedRoute,
    public storeService: StoreService,
    public authService: AuthService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(
      (element) => element.id == parseInt(id),
    ) as ProductModel;
    console.log(this.detailProduct);
  }

  protected readonly AuthService = AuthService;
}
