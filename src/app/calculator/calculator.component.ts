import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  text: string;
  result: number;
  errori: string;

  ngOnInit() {
    this.text = '';
  }

  calcolo() {
    if(this.text.endsWith('+') || this.text.endsWith('-') || this.text.endsWith('*') || this.text.endsWith('/'))
    {
      this.errori = "Correggi l'espressione!";
    }
    else{
      this.result = eval(this.text);
      this.errori = "";
    }
  }

  inserisciNum(num: string) {
    this.text += num;
  }
  togliNum() {
    this.text = this.text.substring(0, this.text.length - 1);
  }
}
