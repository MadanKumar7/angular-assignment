import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterSvcRoutingModule } from './counter-svc-routing.module';
import { CounterSvcComponent } from './counter-svc.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterLogDisplayComponent } from './counter-log-display/counter-log-display.component';
import { CounterLogComponent } from './counter-log/counter-log.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CounterSvcComponent,
    CounterDisplayComponent,
    CounterInputComponent,
    CounterLogComponent,
    CounterLogDisplayComponent
  ],
  imports: [
    CommonModule,
    CounterSvcRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CounterSvcModule { }
