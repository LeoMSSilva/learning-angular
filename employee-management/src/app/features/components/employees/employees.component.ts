import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string = 'Gerenciamento de funcionários';
  employees = {
    id: 1,
    name: 'Leonardo',
    wage: 10000,
    office: 'Developer',
  };
  constructor() {}

  ngOnInit(): void {}
}
