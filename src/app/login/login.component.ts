import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.authService.userLogin(this.loginData).subscribe((value : boolean) => {
      if(value){
        this.router.navigate(['dashboard']);
        console.log('user login method');
        
      }else {
        alert('failed');
      }
    }, error => {
      alert('failed');
    })    
  }
}
