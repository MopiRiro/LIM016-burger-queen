import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public userLogged = this.authService.getUserLogged();
  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  constructor(private authService: AuthService, private userService: UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.dataUser=this.userService.getUserLoggedIn();
      this.roleWaiter = this.dataUser.role == 'waiter' ? true : false;
      this.roleChef = this.dataUser.role == 'chef' ? true : false;

      if (this.roleChef) {
        return true;
      } else if (this.roleWaiter){
        return false
      }
      window.alert('You don\'t have permission to view this page');
        return false;
  }

}
