import { Product } from './../interfaces/product';
import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.all().subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }

  like(id: number): void {
    this.mainService.like(id).subscribe(
      (product: any) => {
        this.products = this.products.map(
          (product: Product) => {
            if (product.id === id) {
              product.likes = product.likes + 1;
            }
            return product;
          }
        );
      }
    );
  }

}
