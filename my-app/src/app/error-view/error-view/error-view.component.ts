import { Component, OnInit } from '@angular/core';
import { faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss']
})
export class ErrorViewComponent implements OnInit {
  faCrow = faCrown;
  faUser = faUserGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
