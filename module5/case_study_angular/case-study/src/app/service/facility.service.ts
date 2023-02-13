import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Facility[]>{
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility")
  }

  delete(id: number) {
    return this.httpClient.delete<Facility>("http://localhost:3000/facility/" + id)
  }
}
