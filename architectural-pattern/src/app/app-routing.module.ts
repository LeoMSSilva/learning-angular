import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosDetailsComponent } from './features/todos/pages/todos-details/todos-details.component';
import { TodosPageComponent } from './features/todos/pages/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: 'todos',
    component: TodosPageComponent,
    loadChildren: () =>
    import('./features/todos/todos.module').then((m) => m.TodosModule),
  },
  {
    path: 'todos/:id',
    component: TodosDetailsComponent,
    loadChildren: () =>
    import('./features/todos/todos.module').then((m) => m.TodosModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
