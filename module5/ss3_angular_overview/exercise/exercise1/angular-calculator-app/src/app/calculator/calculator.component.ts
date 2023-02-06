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

  operatorCal(numberFirst: any, numberSecond: any, operator: string) {
    switch (operator) {
      case '+':
        this.result = 'Kết quả là ' + (parseFloat(numberFirst) + parseFloat(numberSecond));
        break;
      case '-':
        this.result = 'Kết quả là ' + (parseFloat(numberFirst) + parseFloat(numberSecond));
        break;
      case '*':
        this.result = 'Kết quả là ' + (parseFloat(numberFirst) + parseFloat(numberSecond));
        break;
      case '/':
        this.result = 'Kết quả là ' + (parseFloat(numberFirst) + parseFloat(numberSecond));
    }
  }
}
