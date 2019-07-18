import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppGenState {
    state$ = new BehaviorSubject<IAppGenStateData>(this.loadState());
    loadState(): IAppGenStateData {
        const storage = localStorage.getItem('appGen');
        if (storage) {
            return JSON.parse(storage);
        } else {
            return {
                curAppGen: {
                    name: '',
                    routes: []
                }
            };
        }
    }

    get appGen(): IAppGen {
        return this.state$.value.curAppGen;
    }
    saveLocal() {
        localStorage.setItem('appGen', JSON.stringify(this.state$.value));
    }
}

export interface IAppGenStateData {
    curAppGen: IAppGen;
}

export interface IAppGen {
    name: string;
    routes: IAppGenRoute[];
}

export interface IAppGenRoute {
    name: string;
    path: string;
}
