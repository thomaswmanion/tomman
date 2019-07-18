import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppGenState, IAppGenRoute } from '../app-gen/app-gen.state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.scss']
})
export class EditRouteComponent implements OnInit {
  route: IAppGenRoute;
  constructor(
    private ar: ActivatedRoute,
    private appGenState: AppGenState
  ) { }

  async ngOnInit() {
    console.log('here');
    const index = parseInt((this.ar.paramMap.source as BehaviorSubject<{ index: string}>).value.index, 10);
    this.route = this.appGenState.appGen.routes[index];
    console.log(index, this.route);

  }

}
