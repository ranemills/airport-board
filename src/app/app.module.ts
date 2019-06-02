import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeparturesComponent } from './departures/departures.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';

@NgModule({
  declarations: [
    AppComponent,
    DeparturesComponent,
    ArrivalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
