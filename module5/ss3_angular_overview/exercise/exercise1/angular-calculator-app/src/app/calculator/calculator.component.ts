import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result = '';
  constructor() { }

  ngOnInit(): void {
  }

  operatorCal(number1: any, number2: any, operator: string) {
    switch (operator) {
      case '+':
        this.result = 'Kết quả là ' + (parseFloat(number1) + parseFloat(number2));
        break;
      case '-':
        this.result = 'Kết quả là ' + (parseFloat(number1) + parseFloat(number2));
        break;
      case '*':
        this.result = 'Kết quả là ' + (parseFloat(number1) + parseFloat(number2));
        break;
      case '/':
        this.result = 'Kết quả là ' + (parseFloat(number1.value) + parseFloat(number2.value));
        break;
    }
  }
}
