import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { UserService } from 'src/app/core/userservices/user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  
  constructor(private userService:UserService) { }

  ngOnInit() {
  }
}
