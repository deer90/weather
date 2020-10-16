import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "./base-http.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Weather} from "../models/weather.model";
import {WeatherList} from "../models/weather-list.model";
import {Coords} from "../interfaces/coords.interface";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    constructor(public http: HttpClient, public baseHttpService: BaseHttpService) {
    }

    getWeather(cities: string): Observable<WeatherList<Weather[]>> {
        return this.baseHttpService
            .get(`group?id=${cities}&units=metric`)
            .pipe(map(response => response as WeatherList<Weather[]>));
    }

    getCityWeather(id: number): Observable<Weather> {
        return this.baseHttpService
            .get(`weather?id=${id}&units=metric`)
            .pipe(map(response => response as Weather));
    }

    getForecast(coords: Coords): Observable<any> {
        return this.baseHttpService
            .get(`onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric`)
            .pipe(map(response => response as any));
    }
}
