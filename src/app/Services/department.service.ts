import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

<<<<<<< Updated upstream
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
>>>>>>> Stashed changes
}
