import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getAllToServer():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers")
  }

  save(customer: Customer) {
    return this.httpClient.post<Customer>("http://localhost:3000/customers", customer)
  }

  delete(id: number) {
    return this.httpClient.delete<Customer>("http://localhost:3000/customers/" + id)
  }

  update(customer: Customer) {
    return this.httpClient.put<Customer>("http://localhost:3000/customers/", customer)

  }
}
