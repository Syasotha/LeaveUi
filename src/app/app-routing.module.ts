import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';
import { StatusComponent } from './Components/status/status.component';
import { UserComponent } from './user/user.component';
import { LeavetypeComponent } from './Components/leavetype/leavetype.component';
import { ApplyrequestComponent } from './applyrequest/applyrequest.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'rolename', component:RoleComponent},
  {path: 'department', component:DepartmentComponent},
  {path: 'status', component:StatusComponent},
  {path: 'user', component:UserComponent},
  {path: 'leavetype', component:LeavetypeComponent},
  {path: 'applyleaverequest', component:ApplyrequestComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
