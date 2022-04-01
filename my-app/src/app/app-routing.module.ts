import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
  path:'chef',
  component: NavbarComponent,
  canActivate: [AuthGuard],
  children: [
      {
        path:'',
        loadChildren: () => import('./chefview/chefview.module').then(m => m.ChefviewModule)
      }
    ]
  },
  {
    path:'waiter',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        loadChildren: () => import('./waiterview/waiterview.module').then(m => m.WaiterviewModule)
      },
      {
        path:'order-status',
        loadChildren: () => import('./chefview/chefview.module').then(m => m.ChefviewModule)
      }
    ]
  },
  {
    path:'',
    component: NavbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path:'**',
        loadChildren: () => import('./error-view/error-view.module').then(m => m.ErrorViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
