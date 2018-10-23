import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getDetailsId(departmentDetailsId){
    this.departmentDetailsobj=Object.assign({},departmentDetailsId)

  }

  deleteDepartment(DepartmentDeletDetails){
    this.departmentService.deleteDepartment(DepartmentDeletDetails).subscribe(departmentDelete=>{
      this.departmentDetailsobj.id=DepartmentDeletDetails.id;
      this.getDepartment();
      alert("Delete Department Sucessfully");
    });

  }

  UpdateDepartmentDetails(){
    this.departmentService.editDepartmentById(this.departmentDetailsobj).subscribe(updatedDepartment=>{
    this.getDepartment();
    alert("Updated Department Sucessfully");
    });
  }

}
