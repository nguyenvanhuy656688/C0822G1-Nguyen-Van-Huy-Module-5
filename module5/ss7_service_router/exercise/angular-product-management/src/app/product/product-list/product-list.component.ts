import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id:number
  name:String
  products: { price: number; name: string; description: string; id: number }[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll() {
    this.products = this.productService.getAll()
  }

  deleteById(id: number) {
    this.productService.deleteById(id);
  }


  deleteModal(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
