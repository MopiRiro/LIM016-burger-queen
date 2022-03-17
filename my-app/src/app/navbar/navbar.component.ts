import { Component, OnInit } from '@angular/core';
import { faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCrow = faCrown;
  faUserGroup = faUserGroup;

  public userLogged = this.authService.getUserLogged();
  public dataUser: any;
  roleChef: boolean = false;
  roleWaiter: boolean = false;

  logout() {
    this.authService.logOut();
  }

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataUser=this.dataService.disparador.getValue();
    this.roleWaiter = this.dataUser.rol == 'waiter' ? true : false;
    this.roleChef = this.dataUser.rol == 'chef' ? true : false;
  }

}
