import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './student/create/create.component';
import { ListComponent } from './student/list/list.component';
const routes: Routes = [
  { path: '', component: UserComponent },
  {
    path: 'registration', component: RegistrationComponent,
  },
  {
    path: 'login', component: UserComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'Student', component: ListComponent
      },
      {
        path: 'Student/create', component: CreateComponent
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
