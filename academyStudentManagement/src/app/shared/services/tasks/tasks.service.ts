import { Injectable } from '@angular/core';
import { ITasks } from 'src/app/features/tasks/models/Tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: ITasks[] = [
    {
      id: 1,
      description: 'Remada aberta',
      completed: false,
      inclusionDate: '2021-07-21',
    },
    {
      id: 2,
      description: 'Mesa flexora',
      completed: true,
      inclusionDate: '2021-07-22',
    },
    {
      id: 3,
      description: 'Supino reto',
      completed: true,
      inclusionDate: '2021-07-20',
    },
    {
      id: 4,
      description: 'Agachamento livre',
      completed: true,
      inclusionDate: '2021-07-21',
    },
    {
      id: 5,
      description: 'Tríceps pulley com corda',
      completed: false,
      inclusionDate: '2021-07-19',
    },
    {
      id: 6,
      description: 'Rosca simultânea',
      completed: false,
      inclusionDate: '2021-07-18',
    },
    {
      id: 7,
      description: 'Prancha',
      completed: false,
      inclusionDate: '2021-07-18',
    },
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  getTaskByName(description: string) {
    return this.tasks.find((task) => task.description === description);
  }
}
