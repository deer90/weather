import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../shared/components/base.component";
import {ROUTING} from "../../shared/routing";
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../../shared/services/weather.service";
import {Weather} from "../../shared/models/weather.model";
import {Coords} from "../../shared/interfaces/coords.interface";
import {Forecast} from "../../shared/interfaces/forecast.interface";
import {HourlyForecast} from "../../shared/interfaces/hourly-forecast.interface";
import * as moment from 'moment';

@Component({
    selector: 'app-forecast',
    templateUrl: './forecast.component.html',
    styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent extends BaseComponent implements OnInit {
    forecastHourly: HourlyForecast[] = [];
    displayedColumns = ['hour', 'temp', 'wind_speed'];
    name: string;
    constructor(public activatedRoute: ActivatedRoute, private weatherService: WeatherService) {
        super();
    }

    ngOnInit(): void {

        this.getWeather();
    }

    getWeather() {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.weatherService.getCityWeather(id).subscribe((response: Weather) => {
            this.name = response.name;
            this.getForecast(response.coord)
        }, this.onGetError.bind(this));
    }

    getForecast(coords: Coords) {
        this.weatherService.getForecast(coords).subscribe((response: Forecast) => {
            this.forecastHourly = response.hourly.map((item, index) => {
                return {
                    temp: item.temp,
                    wind_speed: item.wind_speed,
                    hour: this.formatHour(index)
                }
            });
        }, this.onGetError.bind(this));
    }

    formatHour(i: number) {
        const today = new Date();
        return moment(today.setHours(today.getHours() + i)).format('ddd HH:mm');
    }

    onGetError(error: Error) {
        console.log(error);
    }

    back() {
        this.router.navigate([ROUTING.home])
    }

}
