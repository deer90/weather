import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../base.component";
import {WeatherService} from "../../services/weather.service";
import {Weather} from "../../models/weather.model";

@Component({
    selector: 'app-header',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss']
})
export class WeatherComponent extends BaseComponent implements OnInit {
    weather: Weather;

    constructor(private weatherService: WeatherService) {
        super();
    }

    ngOnInit(): void {
    }

    getWeather() {
        this.weatherService.getWeather('London').subscribe((response: Weather) => {
            this.weather = response;
            console.log(this.weather);
        }, this.onGetWeatherError.bind(this))
    }

    onGetWeatherError(error: Error) {
        console.log(error);
    }

}
