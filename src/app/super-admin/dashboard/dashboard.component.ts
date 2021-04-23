import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/core/services/auth.service';
import { HttpService } from 'src/app/shared/core/services/http.service';

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
  constructor(private httpService : HttpService, private authService : AuthService) { }

  ngOnInit(): void {
    this.getOrg();
    this.getUser();
    this.authService.userInfo.subscribe(value => {
      if(value){
        this.user._id = value._id;
        this.user.email = value.email
      }
    })
  }

  getOrgList : any = [];
  getUserList : any = [];
  getOrg() {
    this.httpService.getOrganization().subscribe(data => {
      this.getOrgList = data;
      console.log('Organization list', data.length);
    })
  }

  getUser() {
    this.httpService.getUserProfile().subscribe(data => {
      this.getUserList = data;
      console.log('End User Profile list', data.length);
    })
  }

}
