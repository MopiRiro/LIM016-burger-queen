import { Component, OnInit } from '@angular/core';
import { faCrown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faCrow = faCrown;
  faUser = faUserGroup;

  public user = {
    email:'',
    password: '',
    name: '',
    role: '',
    id: ''
  }

  Login(){
    const {email,password} = this.user;
    this.authService.login(email,password).then(res =>{
      console.log('Se logeo con exito Firebase', res);
    });
    this.Role();
  }

  constructor(
    private authService: AuthService,
    private dataService : DataService,
    private router: Router) {}

  ngOnInit(): void {
  }

  Role() {
    this.dataService.getJSON().subscribe(data=>{
      const userLog = this.authService.getUserLogged();
      userLog.subscribe((res: any) => {
        const userEmail = res.email;
        const usersData = data.users;
        console.log(userEmail);
        const find = usersData.filter((x: any) => x.email == userEmail)
        const role = find[0].rol;
        console.log(role);
        if(role === 'chef') {
          this.router.navigateByUrl("/chef");
        } else if (role === 'waiter') {
          this.router.navigateByUrl("/waiter")
        };
        this.dataService.disparador.next(find[0]);
      });
    })
  }

}
