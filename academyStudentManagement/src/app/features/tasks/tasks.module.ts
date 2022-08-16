import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
