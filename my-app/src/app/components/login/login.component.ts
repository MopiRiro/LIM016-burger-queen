import { Component, OnInit } from '@angular/core';
import { faCrow, faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCrow = faCrown;
  faUser = faUserGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
