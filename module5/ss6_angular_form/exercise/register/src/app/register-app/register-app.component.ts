import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-app',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.css']
})
export class RegisterAppComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() {

    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/')]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      },this.checkConfirmPass),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(19)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(' /^\\+84\\d{9,10}$/')])
    });
  }


  ngOnInit(): void {
  }


  createFormRegister() {
    console.log(this.reactiveForm);
  }

  checkConfirmPass(control: AbstractControl):String{
    let check = control.value
    if (check.pass==check.confirmPassword){
      return "Nhập lại Ok"}
    else return "Nhập lại sai , mời nhập lại"
  }

}
