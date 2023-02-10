import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [];

  constructor(private httpClient:HttpClient,) {
  }

  getAllToServer():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products")
  }

  addProduct(value: any) {
    return this.httpClient.post("http://localhost:3000/products", value);
  }

  deleteById(id: number) {
    return this.httpClient.delete("http://localhost:3000/products/${id}");

  }
}
