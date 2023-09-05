import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./app-page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./app-page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'userdetails',
    loadChildren: () => import('./app-page/userdetails/userdetails.module').then( m => m.UserdetailsPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./app-page/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
