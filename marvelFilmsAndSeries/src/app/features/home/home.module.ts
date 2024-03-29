import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
