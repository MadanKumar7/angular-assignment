import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit, OnDestroy {


  timerLimit = new FormControl();
  timerLimitValue = 0;
  status = 'start';
  counterStarted = false;
  pauseArray:any = []; 
  currentvalueSub!:Subscription;
  errorMessage = '';

  constructor(private counterSvc:CounterService) { }

  ngOnInit(): void {
    this.currentvalueSub = this.counterSvc.getCurrentValue().subscribe(
      (value)=>{
        if(value != null){
          this.pauseArray.push(value);
        }
      }
    );
  }

  startTimer(){
    this.errorMessage = '';
    if(this.counterStarted){
      this.status = 'pause';
    }
    if(this.timerLimit.value){
      this.status = 'pause';
      this.counterStarted = true;
      this.counterSvc.setTimer(this.timerLimit.value);
      this.timerLimit.setValue(null);
      this.counterSvc.setStart(true);
      this.counterSvc.setPause(false);
      this.counterSvc.setReset(false);
    }else if(this.counterStarted){
      this.counterSvc.setStart(true);
      this.counterSvc.setPause(false);
    }else{
      this.errorMessage = 'Please enter the counter limit';
    }
  }

  pauseTimer(){
    this.status = 'start';
    this.counterSvc.setStart(false);
    this.counterSvc.setPause(true);
  }

  resetTimer(){
    this.status = 'start';
    this.errorMessage = '';
    this.pauseArray.length = 0;
    this.counterStarted = false;
    this.counterSvc.setReset(true);
    this.counterSvc.setPause(false);
    this.counterSvc.setStart(false);
  }

  ngOnDestroy(){
    this.currentvalueSub.unsubscribe();
  }

}
