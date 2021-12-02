import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private httpClient:HttpClient) { }

  public getEmployees() {
    return this.httpClient.get<Employee[]>('/server/employees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("/server/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("/server/employees", employee);
  }
}

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
}