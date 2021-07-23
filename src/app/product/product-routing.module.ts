import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }, {
    path: 'create',
    component: ProductCreateComponent
  }, {
    path: 'edit/:id',
    component: ProductEditComponent
  }
  , {
    path: ':id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
