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
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
