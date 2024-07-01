import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function TokenInterceptor(req: HttpRequest<unknown>, next:HttpHandlerFn): Observable<HttpEvent<unknown>> {
    if(req.url==='http://localhost:4000/auth/register' || req.url==='http://localhost:4000/auth/login'){
        // exclude all the routes that are not protects. PUT THEM IN ARRAY THEN USE CONTAINS
        return next(req)
    } else {    //modify all the rest

        console.log(req.url)
        // get token form local storage
        const token = localStorage.getItem('token') as string
        // modify request by appending token as its protected
        const modifiedRequest = req.clone({headers: new HttpHeaders().append('token', token)})
        // continue with the modified request
        return next(modifiedRequest)
    }
}