import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { ITasks } from '../../models/Tasks';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITasks[] = this.tasksService.getTasks();

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}
}
