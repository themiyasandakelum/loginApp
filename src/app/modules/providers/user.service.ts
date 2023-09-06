import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user
data:any;
  constructor(private authService:AuthService,private router:Router) { }
  //isLoggedIn = new BehaviorSubject(false);

  login(data){
    this.authService.login(data).subscribe((res?:any)=>{
      this.user=res.output
        localStorage.setItem('token', res?.output?.token);
        localStorage.setItem('companyId',res?.output?.companyId)
        this.router.navigateByUrl('/homepage');
      
    }, (err) => {
      console.log(err);
    });
  }
getUserDetails(){
  this.authService.getUserDetails().subscribe((res:any)=>{
  this.data=res?.output
})
  }
}
