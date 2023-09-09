import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl: string = environment.apiBaseUrl;
  user: any;
  constructor(private http: HttpClient, public router: Router) { 
  }

  post(method: string, body: any, params: any = {}) {
    const url = this.baseUrl + method;
    return this.http.post(url, body,{});
  }
  get(method: string, params: any) {
    const url = this.baseUrl + method;
    return this.http.get(url, {});
  }
}
