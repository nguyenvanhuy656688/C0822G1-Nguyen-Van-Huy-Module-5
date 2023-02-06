import { Component, OnInit } from '@angular/core';
import {Color} from "../model/color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:Color ={color:"#29e624"}

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(target: any) {
    this.color.color= target.value
  }
}
