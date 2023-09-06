import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

loginobj:any ={
  UserName:'',
  password:''
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
  constructor(public formBuider: FormBuilder, private nav: NavController,private userService : UserService) { }

  ngOnInit() {
    
  this.validationFormUser = this.formBuider.group({
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

  loginUser(){
    let body = this.validationFormUser.value;
    this.userService.login(body)
  }
}
