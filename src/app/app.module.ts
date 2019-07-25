import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { UserComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';
import { CreateComponent } from './users/create/create.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditComponent } from './users/edit/edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './products/product-view/product-view.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { TakeAttendanceComponent } from './emp-attendance/take-attendance/take-attendance.component';
import { AttendanceViewComponent } from './emp-attendance/attendance-view/attendance-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    StudentComponent,
    ListComponent,
    CreateComponent,
    RegistrationComponent,
    EditComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductEditComponent,
    EmployeeComponent,
    EmployeeViewComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmpAttendanceComponent,
    TakeAttendanceComponent,
    AttendanceViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
