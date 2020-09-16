import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiMethod} from './../shared/enum';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  public send(method: ApiMethod, endPoint: string, body?: any): Observable<any> {
    return this.baseSend(method, endPoint, body);
}

private baseSend(method: ApiMethod, endPoint: string, body?: any): Observable<any>  {
    const url = this.getUrlFormatted(endPoint);
    switch (method) {
        case ApiMethod.Get: return this.http.get(url);
        case ApiMethod.Post: return this.http.post(url, body);
        case ApiMethod.Put: return this.http.put(url, body);
        case ApiMethod.Delete: return this.http.delete(url);
    }
}

private getUrlFormatted(endPoint: string): string {
    return (this.baseUrl.endsWith('/'))
        ? this.baseUrl + endPoint
        : this.baseUrl + `/${endPoint}`;
}
}
