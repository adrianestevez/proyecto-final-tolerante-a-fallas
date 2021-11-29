import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  title: string = '';

  image: string = '';

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    const product = {
      title: this.title,
      image: this.image
    }
    this.productService.create(product).subscribe(
      () => {
        this.router.navigate(['/admin/products']);
      }
    );
  }

}
