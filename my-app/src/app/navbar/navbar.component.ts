import { Component, OnInit } from '@angular/core';
import { faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCrow = faCrown;
  faUserGroup = faUserGroup;

  userLogged = this.authService.getUserLogged();

  logout() {
    this.authService.logOut();
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
