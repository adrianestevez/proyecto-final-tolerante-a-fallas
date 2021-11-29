import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.productService.all().subscribe(
      (products: any) => {
        this.products = products;
      }
    );
  }

  delete(id: number): void {
    if (confirm('Estas seguro?')) {
      this.productService.delete(id).subscribe(
        () => {
          this.products = this.products.filter(product => product.id !== id);
        }
      );
    }
  }

}
