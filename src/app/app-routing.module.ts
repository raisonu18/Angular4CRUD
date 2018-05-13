import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './users/users.component';
import { CreateComponent } from './users/create/create.component';
import { ListComponent } from './users/list/list.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'registration', component: RegistrationComponent,
  },
  {
    path: 'login', component: UserComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'user', component: ListComponent, canActivate: [AuthGuard],
      },
      {
        path: 'user/create', component: CreateComponent, canActivate: [AuthGuard],
      },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
