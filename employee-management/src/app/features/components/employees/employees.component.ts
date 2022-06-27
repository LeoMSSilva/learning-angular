import { Component, OnInit } from '@angular/core';

interface IEmployee {
  id: number;
  name: string;
  wage: number;
  office: string;
  photo: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string = 'Gerenciamento de funcionários';

  employees: IEmployee[] = [
    {
      id: 1,
      name: 'Leonardo',
      wage: 10000,
      office: 'Developer',
      photo: 'https://www.github.com/LeoMSSilva.png',
    },
    {
      id: 2,
      name: 'Nathan',
      wage: 10000,
      office: 'Developer',
      photo: 'https://www.github.com/NathanCarlos.png',
    },
    {
      id: 3,
      name: 'Alan',
      wage: 10000,
      office: 'Developer',
      photo: 'https://www.github.com/alanjhonnes.png',
    },
  ];

  employee: number = 0;

  visible: boolean = false;

  constructor() {}

  employeeSelect(id: number): void {
    this.visible = !this.visible;
    this.employee = id;
  }

  ngOnInit(): void {}
}
