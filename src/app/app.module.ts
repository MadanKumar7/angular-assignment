import { StudentModule } from './student/student.module';
import { DynamicDivsModule } from './dynamic-divs/dynamic-divs.module';
import { CounterSvcModule } from './counter-svc/counter-svc.module';
import { CounterModule } from './counter/counter.module';
import { BannerModule } from './banner/banner.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    CounterModule,
    CounterSvcModule,
    DynamicDivsModule,
    ECommerceModule,
    StudentModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
