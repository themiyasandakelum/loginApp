import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpService } from 'src/app/services/httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService, public router: Router) {
    
  }
  login(credentials) {
    return this.httpService.post("Auth/Login", credentials)
  }
  getUserDetails (): Observable<any> {
    return this.httpService.get("Auth/GetLoggedInUserDetails",{})
  }
  
}
