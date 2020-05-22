import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {
    path: 'app',
    component: NavComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: '',
    redirectTo: 'modules',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
