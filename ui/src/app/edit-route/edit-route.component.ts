import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppGenState, IAppGenRoute } from '../app-gen/app-gen.state';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppFormControl } from '../app-capabilities/app-form-control/app-form-control.class';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
  styleUrls: ['./edit-route.component.scss']
})
export class EditRouteComponent implements OnInit {
  route: IAppGenRoute;
  fg: FormGroup;

  constructor(
    private ar: ActivatedRoute,
    private appGenState: AppGenState,
    private router: Router,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
    const index = parseInt((this.ar.paramMap.source as BehaviorSubject<{ index: string }>).value.index, 10);
    this.route = this.appGenState.appGen.routes[index];
    if (!this.route) {
      return this.router.navigate(['/dashboard']);
    }
    this.fg = this.fb.group({
      name: new AppFormControl().bind(this.route, 'name'),
      path: new AppFormControl().bind(this.route, 'path')
    });
  }

}
