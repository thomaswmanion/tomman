import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRouteComponent } from './new-route.component';
import { NavModule } from '../theme/nav/nav.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [NewRouteComponent],
  imports: [
    CommonModule,
    NavModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NewRouteModule { }
