import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  removeCustomer: Customer = {};

  constructor(private customerService: CustomerService, private router: Router) {
    this.customerService.getAllToServer().subscribe(data => {
      this.customerList = data;
      console.log(this.customerList);
    });
  }

  ngOnInit(): void {
  }

  deleteCustomer(): void {
    let temp = this.customerService.delete(this.removeCustomer.id).subscribe(data => {
      if (temp != null) {
        alert('Đã xóa thành công');
        this.customerService.getAllToServer()
      }else {
        alert('xóa không thành công')
      }
      this.router.navigateByUrl('/customer');
    }, error => {

    }, () => {

    })
  }
}
