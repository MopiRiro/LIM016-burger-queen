import { Component, OnInit } from '@angular/core';
import { faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faCrow = faCrown;
  faUserGroup = faUserGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
