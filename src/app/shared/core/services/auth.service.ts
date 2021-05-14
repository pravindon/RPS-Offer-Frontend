import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL, ApiUrl } from '../constant/index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  get isLoggedIn() {
    return this.userInfo.asObservable();
  }

  constructor(private http: HttpClient, private router : Router) { this.loadUserInfo();}

  loadUserInfo() {
    const userData = this.userInfo.getValue();
    if(!userData){
      const accesstoken = localStorage.getItem('access_token');
      if(accesstoken){
        const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
        const data = {
          access_token : accesstoken,
          refresh_token : localStorage.getItem('refresh_token'),
          email: decryptedUser.email,
          _id: decryptedUser._id,
          // tokenExpiration : decryptedUser.exp
        }
        this.userInfo.next(data);
      }
    }
  }
  userLogin(userPayload: any):Observable<boolean> {
    return this.http.post(ApiUrl.loginUrl + '/', userPayload)
    .pipe(
      map((value : any) => {
        if(value){
          localStorage.setItem('access_token', value.access_token);
          localStorage.setItem('refresh_token', value.refresh_token);
          const decryptedUser = this.jwtHelper.decodeToken(value.access_token);
          console.log(decryptedUser);

          const data = {
            access_token : value.access_token,
            refresh_token : value.refresh_token,
            email: decryptedUser.email,
            _id: decryptedUser._id,
            // tokenExpiration : decryptedUser.exp
          }
          this.userInfo.next(data);
          return true;
        }
        return false;
      })
    )
  }
  logout() {
    this.userInfo.next(false);
    localStorage.clear();
    this.router.navigate(['/authorization']);
  }
}
