export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isFavorited: boolean;
}

export interface TodoListItem extends Todo {
  isSaving: boolean;
}

export interface TodoFilters {
  title: string | null;
  isCompleted: boolean | null;
}

export interface TodosState {
  loaded: boolean;
  loading: boolean;
  saving: boolean;
  todos: Todo[];
  filters: TodoFilters;
  todosBeingSaved: Record<string, true | undefined>
}

export interface TodosStateDetails {
  loading: boolean;
  todo: Todo | null
}
