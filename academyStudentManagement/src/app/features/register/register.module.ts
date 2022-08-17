import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
  exports: [RegisterComponent],
})
export class RegisterModule {}
