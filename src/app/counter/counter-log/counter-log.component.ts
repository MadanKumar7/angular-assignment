import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.scss']
})
export class CounterLogComponent implements OnInit {

  @Input() actionArray:any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
