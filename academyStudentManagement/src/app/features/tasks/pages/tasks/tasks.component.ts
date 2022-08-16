import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/services/tasks/tasks.service';
import { ITasks } from '../../models/Tasks';

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITasks[] = this.tasksService.getTasks();
  taskSelected?: string;
  filter = false;
  error = false;
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {}

  filterRow(): void {
    if (this.taskSelected) {
      const result = this.tasksService.getTaskByName(this.taskSelected);
      this.error = result === undefined ? true : false;
      this.filter = true;
    } else {
      this.filter = false;
    }
  }
}
