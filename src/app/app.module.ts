import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppInjector} from "./shared/services/app-injector.service";
import {HomeComponent} from './pages/home/home.component';
import {MaterialModule} from "./shared/modules/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./shared/components/header/header.module";
import {ApiInterceptorService} from "./shared/services/api-interceptor.service";
import {BaseHttpService} from "./shared/services/base-http.service";
import { ForecastComponent } from './pages/forecast/forecast.component';
import {ROUTING} from "./shared/routing";

const appRoutes: Routes = [
    { path: ROUTING.forecast, component: ForecastComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ForecastComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HeaderModule
    ],
    exports: [HeaderModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptorService,
            multi: true
        },
        BaseHttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(injector: Injector) {
        AppInjector.setInjector(injector);
    }
}
