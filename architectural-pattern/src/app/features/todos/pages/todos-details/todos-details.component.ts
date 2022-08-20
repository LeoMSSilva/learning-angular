import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { TodosFacadeService } from 'src/app/shared/facade/todos-facade.service';
import { Todo, TodosStateDetails } from 'src/app/shared/types/todo.type';

@Component({
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {
  todoState!: TodosStateDetails;

  constructor(
    private todosFacade: TodosFacadeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        switchMap((todoId) => this.todosFacade.getTodoById(todoId))
      )
      .subscribe((todoState) => (this.todoState = todoState));
  }

  onTodoToggled(todo: Todo) {
    this.todosFacade
      .editTodo({
        ...todo,
        isCompleted: !todo.isCompleted,
      })
      .subscribe({
        next: () => {
          console.log('todo toggled');
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  onTodoToggledFavorite(todo: Todo) {
    this.todosFacade
      .editTodo({
        ...todo,
        isFavorited: !todo.isFavorited,
      })
      .subscribe({
        next: () => {
          console.log('todo toggled isFavorited');
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
