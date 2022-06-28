import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { BlueDirective } from './directives/blue.directive';

@NgModule({
  declarations: [
    MainComponent,
    BlueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class FeaturesModule { }
