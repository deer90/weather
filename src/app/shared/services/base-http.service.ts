import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Config} from "../config";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class BaseHttpService {
    constructor(public http: HttpClient) {
    }

    getUrl(url: string) {
        return Config.API_URL + url + '&appid=' + Config.OPEN_WEATHER_API_KEY;
    }

    get<T>(url: string, params?: any): Observable<any> {
        const options: any = {params: null};
        options.params = params;
        return this.http.get(this.getUrl(url), options).pipe(
            map(resp => resp),
            catchError(this.errorHandler('GET'))
        );
    }

    errorHandler(operation) {
        return (error: HttpErrorResponse) => {
            return throwError(operation, error.error);
        };
    }
}