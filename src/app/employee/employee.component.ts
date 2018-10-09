import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employess = [];
  constructor(private _employeService: EmployeService) {
  }

  ngOnInit() {
    this._employeService.getEmploy().subscribe((data) => {
      this.employess = data;
    });
  }

}
