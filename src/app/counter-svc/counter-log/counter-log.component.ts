import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.scss']
})
export class CounterLogComponent implements OnInit {

  actionArray:any = [];
  startSub!:Subscription;
  pauseSub!:Subscription;
  resetSub!:Subscription;
  timer: number = 0;
  counterSub!:Subscription;

  constructor(private counterSvc: CounterService) { }

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
          const timeObj = {type:'start', time:new Date(), value:this.timer};
          this.actionArray.push(timeObj);
        }
      }
    );

    this.pauseSub = this.counterSvc.getPause().subscribe(
      (value)=>{
        if(value){
          const timeObj = {type:'pause', time:new Date(), value:this.timer};
          this.actionArray.push(timeObj);         
        }
      }
    );

    this.resetSub = this.counterSvc.getReset().subscribe(
      (value) => {
        if(value){
          this.actionArray.length = 0;
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
