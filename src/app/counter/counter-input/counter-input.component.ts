import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {


  timerLimit = new FormControl();
  timerLimitValue = 0;
  status = 'start';
  counterStarted = false;

  @Output() start:EventEmitter<number> = new EventEmitter();
  @Output() pause:EventEmitter<number> = new EventEmitter();
  @Output() reset:EventEmitter<boolean> = new EventEmitter();
  @Input() pauseArray:any = [];

  constructor() { }

  ngOnInit(): void {
    // this.timerLimit.valueChanges.subscribe(
    //   (value) => {
    //     this.timerLimitValue = value;
    //   }
    // )
  }

  startTimer(){
    if(this.counterStarted){
      this.status = 'pause';
    }
    if(this.timerLimit.value){
      this.status = 'pause';
      this.counterStarted = true;
      this.timerLimitValue = this.timerLimit.value;
      this.start.emit(this.timerLimitValue);
      this.timerLimit.setValue(null);
    }else{
      this.start.emit(0)
    }
  }

  pauseTimer(){
    this.status = 'start';
    this.pause.emit(0);
  }

  resetTimer(){
    this.status = 'start';
    this.reset.emit(true);
  }

}
