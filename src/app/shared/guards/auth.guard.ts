import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService : AuthService, private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // if(state.url == "/") {
    //   return true;
    // }
    const userData = this.authService.userInfo.getValue();
    if(userData && userData._id) {
      if(state.url.indexOf("login") > -1){
        this.router.navigate(['/dashboard']);
        return false;
      }
    }else {
      if(state.url.indexOf("dashboard") > -1){
        this.router.navigate(['/login']);
        return false;
      }
    }
    return true;
  }
  
}
