import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/Student';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  student: IStudent[] = [
    {
      id: 1,
      name: 'Nathan',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 2,
      name: 'Alan',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 3,
      name: 'Leonardo',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 4,
      name: 'Carlos',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 5,
      name: 'Ana',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 6,
      name: 'Marta',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 7,
      name: 'José',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 8,
      name: 'Maria',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 9,
      name: 'João',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    },
    {
      id: 10,
      name: 'Joana',
      monthlyFee: 100,
      lastPaymentDate: '2021-07-23',
      dateOfInclusionInTheSystem: '2021-07-01',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
