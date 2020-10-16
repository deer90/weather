import {environment} from "../../environments/environment";

export class Config {
    static API_URL: string = environment.host;
    static OPEN_WEATHER_API_KEY: string = 'd43da9c282008c174e9ae67809e2e9ac';
}