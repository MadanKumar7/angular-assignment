import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit, OnDestroy {

  timer: number = 0;
  interval:any;
  counterSub!:Subscription;
  startSub!:Subscription;
  pauseSub!:Subscription;
  resetSub!:Subscription;

  constructor(private counterSvc:CounterService) { }

  ngOnInit(): void {
    this.counterSub = this.counterSvc.getTimer().subscribe(
      (value)=>{
        if(value != null){
          this.timer = value;
        }
      }
    );

    this.startSub = this.counterSvc.getStart().subscribe(
      (value)=>{
        if(value){
          this.startInterval();
        }
      }
    );

    this.pauseSub = this.counterSvc.getPause().subscribe(
      (value)=>{
        if(value){
          this.stopInterval();
          this.counterSvc.setCurrentValue(this.timer);
        }
      }
    );

    this.resetSub = this.counterSvc.getReset().subscribe(
      (value) => {
        if(value){
          this.timer = 0;
        }
      }
    )

  }

  startInterval(){
    this.interval = setInterval(() => {
      if(this.timer > 0){
        this.timer--;
      }
    }, 1000);
  }

  stopInterval(){
    clearInterval(this.interval);
  }

  ngOnDestroy(){
    this.startSub.unsubscribe();
    this.pauseSub.unsubscribe();
    this.resetSub.unsubscribe();
    clearInterval(this.interval);
    this.counterSub.unsubscribe();
  }

}
