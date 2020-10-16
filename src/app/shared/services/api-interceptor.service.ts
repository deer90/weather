import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
    constructor(public http: HttpClient) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }))
    }
}
