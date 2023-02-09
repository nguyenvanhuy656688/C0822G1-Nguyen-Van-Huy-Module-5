import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm:FormGroup
  product:Product


  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      const product = this.getProduct(id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }


  ngOnInit(): void {
  }

  submit(id: String) {
    const product = this.productForm.value;
    // @ts-ignore
    this.productService.editProductById(parseInt(id), product);
    this.router.navigate(['/product/list']).then(r => require);
  }

  private getProduct(id: string) {
    return this.productService.findById(parseInt(id))
  }
}
