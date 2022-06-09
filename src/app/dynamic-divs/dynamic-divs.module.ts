import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivsRoutingModule } from './dynamic-divs-routing.module';
import { DynamicDivsComponent } from './dynamic-divs.component';
import { ScrollingModule } from '@angular/cdk/scrolling'


@NgModule({
  declarations: [
    DynamicDivsComponent
  ],
  imports: [
    CommonModule,
    DynamicDivsRoutingModule,
    ScrollingModule
  ]
})
export class DynamicDivsModule {
  constructor(){
    console.log('dynamic')
  }
 }
