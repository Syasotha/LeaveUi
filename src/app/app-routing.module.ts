import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './Components/role/role.component';
import { DepartmentComponent } from './Components/department/department.component';

const routes: Routes = [
  {path: 'rolename', component:RoleComponent},
  {path: 'department', component:DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
