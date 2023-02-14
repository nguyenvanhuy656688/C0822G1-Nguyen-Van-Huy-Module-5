import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  product:[]=[]

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Category[]>("http://localhost:3000/category");
  }

}
