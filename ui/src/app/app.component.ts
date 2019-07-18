import { Component, OnInit } from '@angular/core';
import { IconRegistrationController } from './app-capabilities/icon-registration/icon-registration.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistration: IconRegistrationController
  ) {}

  ngOnInit() {
    this.iconRegistration.registerIcons();
  }
}
