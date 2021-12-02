import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee = new Employee("","","","");

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(): void {
    this.employeeService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}
