import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { AuthService } from 'src/app/core/authservices/auth.service';
import { UserService } from 'src/app/core/userservices/user.service';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent  implements OnInit {
  data:any;
  constructor(private userService:UserService,private authService:AuthService,private formBuilder :FormBuilder) { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  getUserDetails(){
    debugger
    // this.userService.getUserDetails()
    this.authService.getUserDetails().subscribe((res:any)=>{
      debugger
     this.data=res.output;
  })
}
}
