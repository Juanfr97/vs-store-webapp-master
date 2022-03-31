import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators';
import{AngularFireStorage} from '@angular/fire/storage'
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from 'src/app/core/models/Product';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
    product:Product={}
  image$:Observable<any>
  imgUrl:string=''

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage:AngularFireStorage
  ) {
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.product)
    this.product.categoryId=1
      this.productsService.createProduct(this.product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
  }

  



}
