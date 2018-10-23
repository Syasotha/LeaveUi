import { Injectable } from '@angular/core';
import { Department } from '../Models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private httpObj: HttpClient) { }
private departmentUrl='http://localhost:8080/department';

getAllDepartment(){
  return this.httpObj.get<Department[]>(this.departmentUrl);

}
createDepartment(data){
  return this.httpObj.post<Department>(this.departmentUrl,data);
}

deleteDepartment(DepartmentDelet){
  return this.httpObj.delete(this.departmentUrl+ "/" +DepartmentDelet.id);
}

editDepartmentById(editDepartmentDetails){
  return this.httpObj.put<Department>(this.departmentUrl,editDepartmentDetails);
}
>>>>>>> 050f8383734287c372cf204511da757b81a3b3c4
}
