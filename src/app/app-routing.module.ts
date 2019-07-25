import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';
import { ListComponent } from './users/list/list.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { AttendanceViewComponent } from './emp-attendance/attendance-view/attendance-view.component';
import { TakeAttendanceComponent } from './emp-attendance/take-attendance/take-attendance.component';
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
      {
        path: 'user/edit/:id', component: EditComponent, canActivate: [AuthGuard],
      },
      {
        path: 'product', component: ProductViewComponent, canActivate: [AuthGuard],
      },
      {
        path: 'product/create', component: ProductCreateComponent, canActivate: [AuthGuard],
      },
      {
        path: 'product/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard],
      },
      {
        path: 'employee', component: EmployeeViewComponent, canActivate: [AuthGuard],
      },
      {
        path: 'employee/create', component: EmployeeCreateComponent, canActivate: [AuthGuard],
      },
      {
        path: 'employee/edit/:id', component: EmployeeEditComponent, canActivate: [AuthGuard],
      },
      {
        path: 'empAttendance', component: AttendanceViewComponent, canActivate: [AuthGuard],
      },
      {
        path: 'empAttendance/take', component: TakeAttendanceComponent, canActivate: [AuthGuard],
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
