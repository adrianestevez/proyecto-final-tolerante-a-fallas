import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private productService: ProductService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      image: ''
    });

    this.id = this.route.snapshot.params.id;

    this.productService.get(this.id).subscribe(
      (product) => {
        this.form.patchValue(product);
      }
    );
  }

  submit(): void{
    this.productService.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/products']);
      }
    );
  }

}
