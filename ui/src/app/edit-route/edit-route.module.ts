import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRouteComponent } from './edit-route.component';
import { EditRouteNavComponent } from './edit-route-nav/edit-route-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditRouteComponent, EditRouteNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule
  ]
})
export class EditRouteModule { }
