import { Component, OnInit } from '@angular/core';
import { AppGenState } from '../app-gen/app-gen.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  hovering: { [prop: number]: boolean } = {};
  constructor(
    public appGenState: AppGenState
  ) { }

  ngOnInit() {

  }

  get routes() {
    return this.appGenState.appGen.routes;
  }
}
