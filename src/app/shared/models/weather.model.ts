import {MainWeather} from "../interfaces/main-weather.interface";
import {Wind} from "../interfaces/wind.interface";
import {Coords} from "../interfaces/coords.interface";


export class Weather {
    id: number;
    name: string;
    main: MainWeather;
    wind: Wind;
    coord: Coords;

    constructor(data?: any) {
        Object.assign(this, data)
    }
}