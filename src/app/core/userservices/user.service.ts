import { Injectable } from '@angular/core';
import { AuthService } from '../authservices/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user
data:any;
  constructor(private authService:AuthService,private router:Router) { }
  //isLoggedIn = new BehaviorSubject(false);

  login(data){
    debugger
    this.authService.login(data).subscribe((res:any)=>{
      debugger
      this.user=res.output
        localStorage.setItem('token', res.output.token);
        localStorage.setItem('companyId',res.output.companyId)
        this.router.navigateByUrl('/homepage');
      
    }, (err) => {
      console.log(err);
    });
  }
getUserDetails(){
  this.authService.getUserDetails().subscribe((res:any)=>{
  this.data=res.output
})
  }
}
