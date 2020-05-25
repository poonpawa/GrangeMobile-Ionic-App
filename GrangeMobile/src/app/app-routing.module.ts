import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { CampusesComponent } from './campuses/campuses.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { UserResolver } from "./services/user.resolver";
import { AuthGuard } from "./services/auth.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        resolve: { data: UserResolver },
      },
      {
        path: 'modules',
        component: ModulesComponent
      },
      {
        path: 'campuses',
        component: CampusesComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
