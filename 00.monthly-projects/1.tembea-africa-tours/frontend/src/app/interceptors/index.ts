import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function TokenInterceptor(req: HttpRequest<unknown>, next:HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log(req.url)
    // get token form local storage
    const token = localStorage.getItem('token') as string
    // modify request by appending token as its protected
    const modifiedRequest = req.clone({headers: new HttpHeaders().append('token', token)})
    // continue with the modified request
    return next(modifiedRequest)
}