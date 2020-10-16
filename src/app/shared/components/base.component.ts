import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {AppInjector} from "../services/app-injector.service";
import {BaseHttpService} from "../services/base-http.service";
import {Router} from "@angular/router";

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy {
    subscriptions: Subscription = new Subscription();
    baseHttpService: BaseHttpService;
    router: Router;

    constructor() {
        const injector = AppInjector.getInjector();
        this.baseHttpService = injector.get(BaseHttpService);
        this.router = injector.get(Router);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}