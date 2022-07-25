import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
