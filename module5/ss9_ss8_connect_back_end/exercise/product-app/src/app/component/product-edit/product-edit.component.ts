import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  reactiveForm: FormGroup
  category: Category
  id: number


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    })
  }


  ngOnInit(): void {
  }

  edit(id: number) {
    const category = this.reactiveForm.value;
    this.productService.update(id, category).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }


  private getCategory(id: number) {
    return this.productService.findById(id).subscribe(category => {
      this.reactiveForm.patchValue(category)
    });

  }
}
