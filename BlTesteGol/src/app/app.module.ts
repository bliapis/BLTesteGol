import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { ErrorsModule } from './errors/errors.module';
import { AirplanesModule } from './airplanes/airplanes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    AirplanesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
