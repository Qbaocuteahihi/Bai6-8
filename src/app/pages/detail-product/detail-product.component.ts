import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { CurrencyPipe } from '@angular/common';
import { TotalCostComponent } from '../../components/total/total.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CurrencyPipe, TotalCostComponent],
  templateUrl: 'detail-product.component.html',
  styleUrl: 'detail-product.component.scss',
})
export class DetailProductComponent {
  detailProduct!: Product | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    public storeService: StoreService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.detailProduct = this.storeService.products.find(
      (element) => element.id === parseInt(id),
    );
    console.log(this.detailProduct);
  }
}
