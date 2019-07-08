import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavModule } from '../theme/nav/nav.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NavModule
  ]
})
export class DashboardModule { }
