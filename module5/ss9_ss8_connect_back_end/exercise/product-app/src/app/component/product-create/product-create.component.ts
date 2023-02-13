import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  reactiveForm: FormGroup;
  category: Category[] = [];

  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
    })
    this.categoryService.getAll().subscribe(next => {
      console.log(next)
      this.category = next
    })
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid) {
      this.reactiveForm.value.id = parseInt(this.reactiveForm.value.id);
      let temp =this.productService.addProduct(this.reactiveForm.value).subscribe( next => {
        if (temp != null)
        alert("Thêm mới thành công")
        this.router.navigateByUrl("/")
      }, error => {
      }, () => {
      });
    }

  }
}
