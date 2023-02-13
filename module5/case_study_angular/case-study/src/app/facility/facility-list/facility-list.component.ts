import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];
  temp: Facility = {};

  constructor(private facilityService:FacilityService,private router:Router) {
    facilityService.getAll().subscribe(data => {
      this.facilityList = data
      console.log(data)
    })
  }

  ngOnInit(): void {
  }

  deleteFacility():void {
    let temp = this.facilityService.delete(this.temp.id).subscribe(data => {
      if (temp != null) {
        alert('Đã xóa thành công');
        this.facilityService.getAll()
      }else {
        alert('xóa không thành công')
      }
      this.router.navigateByUrl('/customer');
    }, error => {

    }, () => {

    })

  }
}
