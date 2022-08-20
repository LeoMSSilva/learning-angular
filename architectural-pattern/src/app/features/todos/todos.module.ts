import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosPageComponent } from './pages/todos-page/todos-page.component';
import { TodosDetailsComponent } from './pages/todos-details/todos-details.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodosPageComponent,
    TodosDetailsComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TodosPageComponent,
    TodosDetailsComponent
  ],
})
export class TodosModule {}
