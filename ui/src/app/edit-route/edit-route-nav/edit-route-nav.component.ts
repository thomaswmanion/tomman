import { Component, OnInit, Input } from '@angular/core';
import { addComponentList, IAddComponent } from '../add/add-component-list';
import { Router } from '@angular/router';
import { AppGenState, IAppGenRoute } from 'src/app/app-gen/app-gen.state';
import { MatDialog } from '@angular/material';
import { AddComponentModalComponent } from '../add-component-modal/add-component-modal.component';

@Component({
  selector: 'app-edit-route-nav',
  templateUrl: './edit-route-nav.component.html',
  styleUrls: ['./edit-route-nav.component.scss']
})
export class EditRouteNavComponent implements OnInit {
  @Input() route: IAppGenRoute;
  addComponentList = addComponentList;
  constructor(
    private appGenState: AppGenState,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  create(c: IAddComponent) {
    return this.dialog.open(AddComponentModalComponent, {
      data: {
        component: c,
        route: this.route
      },
      panelClass: 'smallDialog'
    });
  }

  async backToDashboard() {
    this.appGenState.saveLocal();
    return this.router.navigate(['/dashboard']);
  }

}
