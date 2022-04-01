import { UserService } from 'src/app/services/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ChefGuard implements CanActivate {

  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  constructor(private userService: UserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.checkingRole();

      if(this.roleChef){
        return true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You don\'t have permission to view this page'
        }).then((result) => {
          console.log(result)
          window.location.pathname = '/waiter';
        })
        return false;
      }
    }
  checkingRole() {
    this.dataUser = this.userService.getUserLoggedIn();
    console.log(this.dataUser);
    if (this.dataUser) {
      this.roleWaiter = this.dataUser.role == 'waiter' ? true : false;
      this.roleChef = this.dataUser.role == 'chef' ? true : false;
    }

  }

}
