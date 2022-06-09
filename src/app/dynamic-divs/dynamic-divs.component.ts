import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {

  numbers:any  = [];
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i<1000; i++){
      this.numbers.push(i);
    }    
  }

  showAlert(number:number){
    alert(`Button ${number} clicked.`);
  }

}
