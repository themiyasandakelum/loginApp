import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl: string = environment.apiBaseUrl;
  user: any;
  constructor(private httpService: HttpService, public router: Router) {
    
  }
  login(credentials) {
    return this.httpService.post("Auth/Login", credentials)
  }
  getUserDetails (): Observable<any> {
    return this.httpService.get("Auth/GetLoggedInUserDetails",{})
  }
  
}
