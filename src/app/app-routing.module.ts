import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
