import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) { this.loadUserInfo();}

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
        console.log('Load user info method Data', data);
        
      }
    }
  }
  userLogin(userPayload: any):Observable<boolean> {
    return this.http.post('http://localhost:4000/v1/user/superadmin/login', userPayload)
    // return this.http.post('http://localhost:3000/auth/login/', userPayload)
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
          console.log('Data testing service', data);
          
          return true;
        }
        return false;
      })
    )
  }
}
