import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-svc',
  templateUrl: './counter-svc.component.html',
  styleUrls: ['./counter-svc.component.scss']
})
export class CounterSvcComponent implements OnInit {

  constructor(private counterSvc:CounterService) { }

  ngOnInit(): void {
    this.counterSvc.setStart(null);
    this.counterSvc.setPause(null);
    this.counterSvc.setReset(null);
    this.counterSvc.setTimer(null);
    this.counterSvc.setCurrentValue(null);
  }

}
