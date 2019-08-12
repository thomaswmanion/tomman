import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IAddComponent } from '../add/add-component-list';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAppGenRoute, AppGenState } from 'src/app/app-gen/app-gen.state';

@Component({
  selector: 'app-add-component-modal',
  templateUrl: './add-component-modal.component.html',
  styleUrls: ['./add-component-modal.component.scss']
})
export class AddComponentModalComponent implements OnInit {
  fg: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { component: IAddComponent; route: IAppGenRoute },
    private ref: MatDialogRef<AddComponentModalComponent>,
    private appGenState: AppGenState
  ) { }

  ngOnInit() {
    const props: { [key: string]: FormControl } = {};
    this.c.properties.forEach(p => {
      const control = new FormControl();
      if (p.required) {
        control.setValidators(Validators.required);
      }
      props[p.id] = control;
    });
    this.fg = this.fb.group(props);
  }

  create() {
    if (!this.fg.valid) {
      this.fg.markAsTouched();
      return;
    }
    if (!this.data.route.sections || !this.data.route.sections[0].components) {
      this.data.route.sections = [{ components: [] }];
    }
    const value = this.fg.value;
    value.id = this.c.id;
    this.data.route.sections[0].components.push(value);
    this.appGenState.saveLocal();
    this.ref.close();
  }

  get c() {
    return this.data.component;
  }

}
