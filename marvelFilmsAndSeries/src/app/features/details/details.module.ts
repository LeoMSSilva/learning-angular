import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
