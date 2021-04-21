import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user = {
    email: '',
    _id: ''
  }
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value => {
      if(value){
        this.user._id = value._id;
        this.user.email = value.email
      }
    })
  }

}
