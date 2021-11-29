import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProdutsComponent } from './admin/produts/produts.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin',
  component: AdminComponent,
  children: [
    {path: 'products', component:ProdutsComponent},
    {path: 'products/create', component:ProductCreateComponent},
    {path: 'products/:id/edit', component:ProductEditComponent},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
