import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'banner', loadChildren:()=> import('./banner/banner.module').then(m=>m.BannerModule)},
  {path:'counter', loadChildren:()=> import('./counter/counter.module').then(m=>m.CounterModule)},
  {path:'counter-svc', loadChildren:()=> import('./counter-svc/counter-svc.module').then(m=>m.CounterSvcModule)},
  {path:'dynamic-divs', loadChildren:()=> import('./dynamic-divs/dynamic-divs.module').then(m=>m.DynamicDivsModule)},
  {path:'e-commerce', loadChildren:()=> import('./e-commerce/e-commerce.module').then(m=>m.ECommerceModule)},
  {path:'student', loadChildren:()=> import('./student/student.module').then(m=>m.StudentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
