import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { NewRouteModule } from './new-route/new-route.module';
import { NewRouteComponent } from './new-route/new-route.component';
import { EditRouteComponent } from './edit-route/edit-route.component';
import { EditRouteModule } from './edit-route/edit-route.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'color-picker', component: ColorPickerComponent },
  { path: 'new-route', component: NewRouteComponent },
  { path: 'edit-route/:index', component: EditRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule, ColorPickerModule, NewRouteModule, EditRouteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
