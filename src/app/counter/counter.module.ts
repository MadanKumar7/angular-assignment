import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { CounterLogDisplayComponent } from './counter-log-display/counter-log-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterComponent,
    CounterDisplayComponent,
    CounterInputComponent,
    CounterLogComponent,
    CounterLogDisplayComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CounterModule { }
