import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';
import { LeavetypeComponent } from './Components/leavetype/leavetype.component';
import { UserComponent } from './user/user.component';
import { ApplyrequestComponent } from './applyrequest/applyrequest.component';

const routes: Routes = [
  {path: 'rolename', component:RoleComponent},
  {path: 'department', component:DepartmentComponent},
  {path:'leavetype',component:LeavetypeComponent},
  {path: 'user',component:UserComponent},
  {path:'applyrequest',component:ApplyrequestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
