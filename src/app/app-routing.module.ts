import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent }      from './user/user.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user', component: DashboardComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
