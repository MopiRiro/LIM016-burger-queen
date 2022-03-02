import { Component, OnInit } from '@angular/core';
import { faCrow, faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCrow = faCrown;
  faUser = faUserGroup;

  user = {
    email:'',
    password: '',
  }

  Login(){
    const {email,password} = this.user;
    this.authService.login(email,password).then(res =>{
      console.log('Se logeo con exito Firebase', res);
      if(email === "chef@makisqueen.com") {
        window.location.pathname="/chef";
      }else if(email === "waiter@makisqueen.com") {
        window.location.pathname="/waiter";
      }
    });
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

}
