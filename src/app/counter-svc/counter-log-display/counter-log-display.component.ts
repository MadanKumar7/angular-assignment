import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-log-display',
  templateUrl: './counter-log-display.component.html',
  styleUrls: ['./counter-log-display.component.scss']
})
export class CounterLogDisplayComponent implements OnInit {

  pauseCount:number = 0;
  startCount:number = 0;
  startSub!:Subscription;
  pauseSub!:Subscription;
  resetSub!:Subscription;

  constructor(private counterSvc: CounterService) { }

  ngOnInit(): void {

    this.startSub = this.counterSvc.getStart().subscribe(
      (value)=>{
        if(value){
          this.startCount++;
        }
      }
    );

    this.pauseSub = this.counterSvc.getPause().subscribe(
      (value)=>{
        if(value){
          this.pauseCount++;
          
        }
      }
    );

    this.resetSub = this.counterSvc.getReset().subscribe(
      (value) => {
        if(value){
          this.startCount = 0;
          this.pauseCount = 0;
        }
      }
    );
  }

  ngOnDestroy(){
    this.startSub.unsubscribe();
    this.pauseSub.unsubscribe();
    this.resetSub.unsubscribe();    
  }

}
