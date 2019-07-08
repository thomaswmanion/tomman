import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppGenState } from '../app-gen/app-gen.state';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('nameEl') nameEl: ElementRef;
  constructor(
    private router: Router,
    public appGenState: AppGenState
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.nameEl.nativeElement.focus();
    });
  }

  async begin() {
    this.appGenState.saveLocal();
    await this.router.navigate(['dashboard']);
  }
}
