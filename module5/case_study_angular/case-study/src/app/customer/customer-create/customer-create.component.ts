import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  reactiveForm: FormGroup;
  customerType: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private router: Router, private customerTypeService: CustomerTypeService) {


  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      customerType: new FormControl('')
    });

    this.customerTypeService.getAll().subscribe(next => {
      console.log(next);
      this.customerType = next;
    });

  }

  create() {
    let customer: Customer;
    customer = this.reactiveForm.value;
    if (this.reactiveForm.valid) {
      let temp = this.customerService.save(customer).subscribe(ok => {
        if (temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
