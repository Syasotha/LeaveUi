import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentAllDetails:Department[];
  departmentDetailsobj:Department=new Department();

  constructor(private departmentService:DepartmentService) {}

  ngOnInit() {
    this.getDepartment();
  }
  getDepartment(){
     this.departmentService.getAllDepartment().subscribe(departmentAll=>{
      console.log(departmentAll);
      this.departmentAllDetails=departmentAll;
    });
  }

  addDepartment(){
    this.departmentService.createDepartment(this.departmentDetailsobj).subscribe(saveDepartment=>{
      this.getDepartment();
      alert("Leave Type Added");
      console.log(saveDepartment);
    });
  }

}
