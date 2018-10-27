import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { LeavetypeService } from './Services/leavetype.service';
import { ApplyrequestComponent } from './applyrequest/applyrequest.component';
import { RoleService } from './Services/role.service';
import { SidenavadminComponent } from './Navigation/sidenavadmin/sidenavadmin.component';
import { CarryForwadRequestComponent } from './ManageLeaveRequest/carry-forwad-request/carry-forwad-request.component';
import { LeaveRequestComponent } from './ManageLeaveRequest/leave-request/leave-request.component';


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
    FooternavComponent,
    ApplyrequestComponent,
    SidenavadminComponent,
    CarryForwadRequestComponent,
    LeaveRequestComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
       

  ],
  providers: [LeavetypeService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

