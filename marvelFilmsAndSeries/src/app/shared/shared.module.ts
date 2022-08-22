import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonGoBackComponent } from './components/button-go-back/button-go-back.component';
import { HttpClientModule } from '@angular/common/http';

export const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  ButtonGoBackComponent
];

export const sharedModules = [
  CommonModule,
  HttpClientModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...sharedComponents,
  ],
  imports: [
    ...sharedModules,
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents,
  ]
})
export class SharedModule { }
