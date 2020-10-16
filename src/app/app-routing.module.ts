import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTING} from "./shared/routing";
import {HomeComponent} from "./pages/home/home.component";
import {ForecastComponent} from "./pages/forecast/forecast.component";

const routes: Routes = [
    {
        path:'',
        redirectTo: '/' + ROUTING.home,
        pathMatch: 'full'
    },
    {
        path: ROUTING.home, component: HomeComponent,
        canActivate: [],
        loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
    },
    {
        path: ROUTING.home, component: ForecastComponent,
        canActivate: [],
        loadChildren: () => import('./pages/forecast/forecast.module').then(module => module.ForecastModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
