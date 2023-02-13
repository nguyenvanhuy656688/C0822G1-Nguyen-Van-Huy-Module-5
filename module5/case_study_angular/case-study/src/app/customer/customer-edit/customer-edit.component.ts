import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  reactiveForm:FormGroup
  customerType: CustomerType[] = [];
  customer:Customer

  constructor(private customerService:CustomerService , private router:Router ,private customerTypeService:CustomerTypeService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.customer?.id),
      name: new FormControl(this.customer?.name, [Validators.required]),
      dateOfBirth: new FormControl(this.customer?.dateOfBirth, [Validators.required]),
      gender: new FormControl(this.customer?.gender, [Validators.required]),
      idCard: new FormControl(this.customer?.idCard, [Validators.required]),
      phoneNumber: new FormControl(this.customer?.phoneNumber, [Validators.required]),
      address: new FormControl(this.customer?.address, [Validators.required]),
      email: new FormControl(this.customer?.email, [Validators.required]),
      customerType: new FormControl(this.customer?.customerType)
    });

    this.customerTypeService.getAll().subscribe(next => {
      console.log(next);
      this.customerType = next;
    });
  }

  edit() {
    let customer: Customer;
    customer = this.reactiveForm.value;
    if (this.reactiveForm.valid) {
      let temp = this.customerService.update(customer).subscribe(ok => {
        if (temp != null) {
          alert('Chỉnh sửa thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }

  }
}
