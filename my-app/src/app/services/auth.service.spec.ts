import { LoginComponent } from './../components/login/login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('(1) Test of component LoginUserComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let serviceGet: AuthService;
  let httpClientSpyGet: { get: jasmine.Spy };
  let serviceAuth: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        LoginComponent
      ],
      providers: [
        AngularFireAuth,
      ]
    })
    .compileComponents()
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new AuthService(httpClientSpyGet as any);
  });

  it('If exist LoginUserComponent', () => {
    expect(component).toBeTruthy();
  })

  it('log', (done: DoneFn) => {
    expect(serviceGet.login("waiter@makisqueen.com", "123456")).toBeTruthy();
    done();
  });

  it('get user logged', () => {
    const prueba = serviceAuth.getUserLogged()
    expect(typeof prueba).toBe("Object");
  });


})

