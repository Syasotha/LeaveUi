import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';
<<<<<<< Updated upstream
import { StatusComponent } from './Components/status/status.component';
=======
import { UserComponent } from './user/user.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path: 'rolename', component:RoleComponent},
  {path: 'department', component:DepartmentComponent},
<<<<<<< Updated upstream
  {path: 'status', component:StatusComponent},
=======
  {path: 'user', component:UserComponent},
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
