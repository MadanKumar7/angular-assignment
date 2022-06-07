import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';


@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule
  ]
})
export class DynamicDivsModule { }
