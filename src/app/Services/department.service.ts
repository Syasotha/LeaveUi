import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from '../Models/department';

const httpOption = {
  header: new HttpHeaders({ 'Content.Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpObj: HttpClient) { }
private departmentUrl='http://localhost:8080/department';

getAllDepartment(){
  return this.httpObj.get<Department[]>(this.departmentUrl);

}
createDepartment(data){
  return this.httpObj.post<Department>(this.departmentUrl,data);
}
}
