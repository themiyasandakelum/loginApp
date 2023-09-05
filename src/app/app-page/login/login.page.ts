import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/authservices/auth.service';
import { UserService } from 'src/app/core/userservices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

loginobj:any ={
  UserName:'',
  Password:''
};

  validationUserMessage ={
    userName:[
      {type:"required", message:"Please enter your Email"},
      {type:"pattern", message:"The Email entered is Incorrect.Try again"}
    ],
    password:[
      {type:"required", message:"please Enter your Password!"},
      {type:"minlength", message:"The Password must be at least 5 characters or more"}

    ]
  }
  
  validationFormUser: FormGroup;
  constructor(public formbuider: FormBuilder, private router: Router, private nav: NavController,private http : HttpClient,
              private authService : AuthService,private userService : UserService) { }

  ngOnInit() {
    
  this.validationFormUser = this.formbuider.group({
    userName: new FormControl("", Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl("", Validators.compose([
      Validators.required,
      Validators.minLength(5)
    ]))
  })
  }
  signUpUser(){ 
    this.nav.navigateForward(['signup'])
  }

  LoginUser(){
    let body = this.validationFormUser.value;
    this.userService.login(body)
  }
}
