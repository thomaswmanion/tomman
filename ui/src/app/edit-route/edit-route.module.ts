import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRouteComponent } from './edit-route.component';
import { EditRouteNavComponent } from './edit-route-nav/edit-route-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComponentModalComponent } from './add-component-modal/add-component-modal.component';

@NgModule({
  declarations: [EditRouteComponent, EditRouteNavComponent, AddComponentModalComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    AddComponentModalComponent
  ]
})
export class EditRouteModule { }
