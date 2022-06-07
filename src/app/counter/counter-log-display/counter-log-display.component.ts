import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-log-display',
  templateUrl: './counter-log-display.component.html',
  styleUrls: ['./counter-log-display.component.scss']
})
export class CounterLogDisplayComponent implements OnInit {

  @Input() pauseCount:any = 0;
  @Input() startCount:any = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
