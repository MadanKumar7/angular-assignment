import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  timer = new BehaviorSubject<number | null>(null);
  start = new BehaviorSubject<boolean | null>(null);
  pause = new BehaviorSubject<boolean | null>(null);
  reset = new BehaviorSubject<boolean | null>(null);
  currentValue = new BehaviorSubject<number | null>(null);
  
  constructor() { }

  setTimer(value:number | null){
    this.timer.next(value);
  }

  getTimer(){
    return this.timer;
  }

  setStart(value:boolean | null){
    this.start.next(value);
  }

  getStart(){
    return this.start;
  }

  setPause(value:boolean | null){
    this.pause.next(value);
  }

  getPause(){
    return this.pause;
  }

  setReset(value:boolean | null){
    this.reset.next(value);
  }

  getReset(){
    return this.reset;
  }

  setCurrentValue(value:number | null){
    this.currentValue.next(value);
  }

  getCurrentValue(){
    return this.currentValue;
  }
}
