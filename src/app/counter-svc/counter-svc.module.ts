import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterSvcRoutingModule } from './counter-svc-routing.module';
import { CounterSvcComponent } from './counter-svc.component';


@NgModule({
  declarations: [
    CounterSvcComponent
  ],
  imports: [
    CommonModule,
    CounterSvcRoutingModule
  ]
})
export class CounterSvcModule { }
