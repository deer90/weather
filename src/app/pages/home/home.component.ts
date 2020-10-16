import {Component, OnInit} from '@angular/core';
import {Weather} from "../../shared/models/weather.model";
import {BaseComponent} from "../../shared/components/base.component";
import {WeatherService} from "../../shared/services/weather.service";
import {MaterialSelect} from "../../shared/interfaces/material-select.interface";
import {FormControl} from "@angular/forms";
import {WeatherList} from "../../shared/models/weather-list.model";
import {ROUTING} from "../../shared/routing";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
    form = new FormControl();
    weather: Weather[] = [];
    displayedColumns = ['id', 'name', 'main', 'wind'];
    cities: MaterialSelect[] = [
        {id: '2643743', name: 'London'},
        {id: '2950159', name: 'Berlin'},
        {id: '756135', name: 'Warsaw'},
        {id: '524901', name: 'Moskow'},
        {id: '1850147', name: 'Tokyo'}
    ];

    constructor(private weatherService: WeatherService) {
        super();
    }

    ngOnInit(): void {
    }

    getWeather(event) {
        if (event.source.selected) {
            this.weatherService.getWeather(event.value.join()).subscribe((response: WeatherList<Weather[]>) => {
                this.weather = response.list;
            }, this.onGetWeatherError.bind(this));
        }
    }

    onGetWeatherError(error: Error) {
        console.log(error);
    }


    openDetails(row: Weather) {
        this.router.navigate([`${ROUTING.home}`, row.id]);
    }
}