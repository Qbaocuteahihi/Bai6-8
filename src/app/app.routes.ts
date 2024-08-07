import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { TotalComponent } from './pages/total/total.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'total',
    component: TotalComponent,
  },
  {
    path: 'products',
    component: ListProductComponent,
  },
  {
    path: 'product/:id',
    component: DetailProductComponent,
  },
];
