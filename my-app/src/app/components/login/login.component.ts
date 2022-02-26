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
    });
    // console.log(this.user);
  }

  constructor(private authService: AuthService) {

   }

  ngOnInit(): void {
  }

}
