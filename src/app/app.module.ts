import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';
import { StatusComponent } from './Components/status/status.component';
import { LeavetypeComponent } from './Components/leavetype/leavetype.component';
import { TopnavComponent } from './Navigation/topnav/topnav.component';
import { SidenavComponent } from './Navigation/sidenav/sidenav.component';
import { FooternavComponent } from './Navigation/footernav/footernav.component';

import{HttpClientModule} from '@angular/common/http';
import { DepartmentService } from './Services/department.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    RoleComponent,
    DepartmentComponent,
    StatusComponent,
    LeavetypeComponent,
    TopnavComponent,
    SidenavComponent,
    FooternavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
