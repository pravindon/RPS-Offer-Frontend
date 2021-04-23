import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFindComponent } from './shared/components/page-not-find/page-not-find.component';
import { AuthGuard } from './shared/core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  //   canActivate : [AuthGuard] },
    { path: 'authorization', loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule),
    canActivate : [AuthGuard] },
  { path: 'superAdmin', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule),
  canActivate : [AuthGuard] },
  { path: '**', component: PageNotFindComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
