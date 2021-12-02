import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  deleteEmployee(employee: Employee) : void {
    this.employeeService.deleteEmployee(employee).subscribe(data =>  {
      this.employees = this.employees.filter(e => e !== employee)
    });   
  }

}
