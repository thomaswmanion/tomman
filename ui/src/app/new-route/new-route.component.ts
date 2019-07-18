import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppGenState } from '../app-gen/app-gen.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.scss']
})
export class NewRouteComponent implements OnInit {
  fg = this.fb.group({
    name: ['', Validators.required],
    path: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private appGenState: AppGenState,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async create() {
    this.fg.markAsTouched();
    if (this.fg.valid) {
      this.appGenState.appGen.routes.push(this.fg.value);
      this.appGenState.saveLocal();
      await this.router.navigate(['/dashboard']);
    }
  }
  async cancel() {
    await this.router.navigate(['/dashboard']);
  }
}
