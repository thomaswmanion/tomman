import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class IconRegistrationController {
    constructor(private registry: MatIconRegistry, private sanitizer: DomSanitizer) {
        this.registerIcons();
    }

    registerIcons() {
        this.registry.addSvgIcon(
            'hamburger',
            this.sanitizer.bypassSecurityTrustResourceUrl('assets/image/icons/hamburger.svg')
        );
    }
}
