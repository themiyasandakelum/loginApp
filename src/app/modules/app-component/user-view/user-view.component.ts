import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent  implements OnInit {
  data:any;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  getUserDetails(){
    this.authService.getUserDetails().subscribe((res?:any)=>{
     this.data=res?.output;
  })
}
}
