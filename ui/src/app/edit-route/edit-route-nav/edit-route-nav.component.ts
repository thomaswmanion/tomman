import { Component, OnInit } from '@angular/core';
import { addComponentList, IAddComponent } from '../add/add-component-list';

@Component({
  selector: 'app-edit-route-nav',
  templateUrl: './edit-route-nav.component.html',
  styleUrls: ['./edit-route-nav.component.scss']
})
export class EditRouteNavComponent implements OnInit {
  addComponentList = addComponentList;
  constructor() { }

  ngOnInit() {
  }

  create(c: IAddComponent) {
    console.log(c.id);
  }

}
