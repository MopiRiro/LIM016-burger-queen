import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WaiterviewModule } from './waiterview/waiterview.module';


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
  path:'',
  component: NavbarComponent,
  children: [
      {
        path:'chef',
        loadChildren: () => import('./chefview/chefview.module').then(m => m.ChefviewModule)
      }
    ]
  },
  {
    path:'',
    component: NavbarComponent,
    children: [
        {
          path:'waiter',
          loadChildren: () => import('./waiterview/waiterview.module').then(m => m.WaiterviewModule)
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
