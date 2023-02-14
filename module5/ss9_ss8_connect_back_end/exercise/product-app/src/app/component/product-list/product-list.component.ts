import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  id: number
  name: string

  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAllToServer().subscribe(data => {
      this.productList = data;
    })
  }

  ngOnInit(): void {
  }

  deleteModal(id: number, name: string) {
    this.name = name
    this.id = id
  }

  deleteById(id: number) {
    this.productService.deleteById(id).subscribe( data=> {
      alert("đã xóa thành công")
    });
  }
}
