import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Login from '../shared/core/model/login.model';
import { HttpService } from '../shared/core/services/http.service';
import { forkJoin } from 'rxjs';
import { errorMsg, regex } from '../shared/core/constant/index';
// import { ToastrService } from 'ngx-toastr';
// import { NgxSpinnerService } from 'ngx-spinner';
import { HelperService } from '../shared/core/services/helper.service';
import { AuthService } from '../shared/core/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
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
        this.router.navigate(['/superAdmin']);
        console.log('user login method');
        
      }else {
        alert('failed');
      }
    }, error => {
      alert('failed');
    })    
  }
}
