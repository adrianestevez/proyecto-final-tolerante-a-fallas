import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutsComponent } from './produts/produts.component';



@NgModule({
  declarations: [
    MenuComponent,
    NavComponent,
    AdminComponent,
    ProdutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
