import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';



@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeesComponent
  ]
})
export class FeaturesModule { }
