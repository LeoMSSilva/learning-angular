import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { TodosFacadeService } from 'src/app/shared/facade/todos-facade.service';
import { Todo } from 'src/app/shared/types/todo.type';
import { v4 } from 'uuid';

@Component({
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent implements OnInit, OnDestroy {
  filteredTodos$ = this.todosFacade.orderedTodos$;
  loading$ = this.todosFacade.loading$;

  filterForm = new FormGroup({
    title: new FormControl<string | null>(null),
    isCompleted: new FormControl<boolean | null>(null),
  });

  newTodoTitleControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  newTodoDescriptionControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  newTodoForm = new FormGroup({
    title: this.newTodoTitleControl,
    description: this.newTodoDescriptionControl,
  });

  saving$ = this.todosFacade.saving$;
  isSaving: boolean = false;

  todosCount$ = this.todosFacade.todosCount$;
  todosCompletedCount$ = this.todosFacade.todosCompletedCount$;

  destroy$ = new Subject<void>();

  constructor(
    private todosFacade: TodosFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.saving$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (isSaving) => {
        this.isSaving = isSaving;
      },
    });
    this.todosFacade.loadTodos().subscribe();
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300),
        map(() => this.filterForm.getRawValue()),
        takeUntil(this.destroy$)
      )
      .subscribe((filters) => {
        this.todosFacade.updateTodosFilters(filters);
      });
  }

  onTodoDeleted(todo: Todo) {
    this.todosFacade.deleteTodo(todo).subscribe();
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

  createTodo() {
    const { title, description } = this.newTodoForm.getRawValue();
    this.todosFacade
      .addTodo({
        id: v4(),
        title: title,
        description: description,
        isCompleted: false,
        isFavorited: false,
      })
      .subscribe({
        next: () => console.log('Todo criado'),
        error: (error) => console.log(`erro: ${error}`),
      });
  }

  onTodoSelected(todo: Todo) {
    this.router.navigate([todo.id], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
