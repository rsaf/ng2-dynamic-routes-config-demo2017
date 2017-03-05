import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { globalRouting } from './routing.module';
import { Router } from '@angular/router';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    globalRouting
  ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
