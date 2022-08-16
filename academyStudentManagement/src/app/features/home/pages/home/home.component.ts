import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/shared/services/students/students.service';
import { IStudent } from '../../models/Student';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  students: IStudent[] = this.studentsService.getStudents();

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {}
}
