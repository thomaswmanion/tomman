import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppGenState } from '../app-gen/app-gen.state';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  display = false;
  @ViewChild('nameEl') nameEl: ElementRef;
  constructor(
    private router: Router,
    public appGenState: AppGenState
  ) { }

  async ngOnInit() {
    if (this.appGenState.appGen.name) {
      await this.router.navigate(['dashboard']);
    }
    this.display = true;
    setTimeout(() => {
      this.nameEl.nativeElement.focus();
    });
  }

  async begin() {
    this.appGenState.saveLocal();
    await this.router.navigate(['dashboard']);
  }
}
