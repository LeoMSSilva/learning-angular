import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { RegisterModule } from './features/register/register.module';
import { TasksModule } from './features/tasks/tasks.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
