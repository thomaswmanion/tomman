import { FormControl } from '@angular/forms';

export class AppFormControl extends FormControl {

    bind(object: any, property: string) {
        if (object[property]) {
            this.setValue(object[property]);
        }
        this.valueChanges.subscribe((value) => {
            object[property] = value;
        });
        return this;
    }
}
