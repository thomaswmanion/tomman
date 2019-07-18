import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavModule } from '../theme/nav/nav.module';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NavModule,
    MatButtonModule,
    RouterModule,
    MatCardModule
  ]
})
export class DashboardModule { }
