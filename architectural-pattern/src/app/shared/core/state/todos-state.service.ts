import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo, TodoFilters, TodosState } from '../../types/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosStateService {
  private state$ = new BehaviorSubject<TodosState>({
    loaded: false,
    loading: false,
    todos: [],
    saving: false,
    filters: {
      isCompleted: null,
      title: null,
    },
    todosBeingSaved: {},
  });

  constructor() {}

  getState(): Observable<TodosState> {
    return this.state$.asObservable();
  }

  setTodos(todos: Todo[]) {
    this.state$.next({
      ...this.state$.getValue(),
      todos: todos,
    });
  }

  addTodo(todo: Todo) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todos: [...state.todos, todo],
    });
  }

  editTodo(todo: Todo) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todos: state.todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      }),
    });
  }

  removeTodo(id: string) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    });
  }

  setFilters(filters: TodoFilters) {
    this.state$.next({
      ...this.state$.getValue(),
      filters: filters,
    });
  }

  setLoading(loading: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loading: loading,
    });
  }

  setLoaded(loaded: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      loaded: loaded,
    });
  }

  setSaving(saving: boolean) {
    this.state$.next({
      ...this.state$.getValue(),
      saving: saving,
    });
  }

  setTodoBeingSaved(todoId: string) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todosBeingSaved: {
        ...state.todosBeingSaved,
        [todoId]: true,
      },
    });
  }

  setTodoNotBeingSaved(todoId: string) {
    const state = this.state$.getValue();
    this.state$.next({
      ...state,
      todosBeingSaved: {
        ...state.todosBeingSaved,
        [todoId]: undefined,
      },
    });
  }
}
